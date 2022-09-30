import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { product_dto } from '../product/product.dto';
import { product_service } from '../product/product.service';
import { device_content_dto } from './device_content.dto';
import { device_content } from './device_content.entity';

@Injectable()
export class device_content_service {
  constructor(
    @Inject('SEQUELIZE')
    private sequelize: Sequelize,
    private product_service: product_service,
    @Inject('DEVICE_CONTENT_REPOSITORY')
    private device_content_repository: typeof device_content,
  ) {
    this.device_content_repository = sequelize.getRepository(device_content);
  }

  private async aggregate(device_contents: device_content[]) {
    return device_contents.map((device_content) => {
      return this.product_service
        .get_product_data(device_content.product.ean)
        .then((product_data) => {
          console.log('product_data', product_data);
          return {
            name:
              product_data?.name ||
              device_content.product.product_class.class_name,
            image:
              product_data?.image ||
              device_content.product.product_class.class_image,
            quantity_str: product_data?.quantity,
            quantity: 1,
            unit_symbol: device_content.product.product_class.unit.unit_symbol,
            expiry_date: device_content.filled_in,
          } as device_content_dto;
        });
    });
  }

  private async filter_duplicates(device_content_dtos: device_content_dto[]) {
    return device_content_dtos
      .map((device_content_dto) => {
        return {
          ...device_content_dto,
          quantity: device_content_dtos.filter(
            (content) => content.name === device_content_dto.name,
          ).length,
        };
      })
      .filter(
        (device_content_dto, index, self) =>
          index ===
          self.findIndex((content) => content.name === device_content_dto.name),
      );
  }

  private join_products = {
    model: this.sequelize.models.product,
    as: 'product',
    attributes: ['ean'],
    include: [
      {
        model: this.sequelize.models.product_class,
        as: 'product_class',
        attributes: ['class_name', 'class_image'],
        include: [
          {
            model: this.sequelize.models.unit,
            as: 'unit',
            attributes: ['unit_symbol'],
          },
        ],
      },
    ],
  };

  async findAll(login: string): Promise<device_content_dto[]> {
    return this.device_content_repository
      .findAll({
        raw: true,
        nest: true,
        where: {
          dropped_out: null,
          percentage_left: { [Op.gt]: 0 },
        },
        include: [
          {
            model: this.sequelize.models.device,
            as: 'device',
            include: [
              {
                model: this.sequelize.models.fridge_user_device_relation,
                as: 'fridge_user_device_relation',
                where: { login: login },
              },
            ],
          },
          this.join_products,
        ],
      })
      .then(this.aggregate)
      .then((device_content_dtos) => {
        return Promise.all(device_content_dtos).then(this.filter_duplicates);
      });
  }

  async findAllFromDevice(device_id: number): Promise<device_content_dto[]> {
    return this.device_content_repository
      .findAll({
        raw: true,
        nest: true,
        where: {
          device_id: device_id,
          dropped_out: null,
          percentage_left: { [Op.gt]: 0 },
        },
        include: [this.join_products],
      })
      .then(this.aggregate)
      .then((device_content_dtos) => {
        return Promise.all(device_content_dtos).then(this.filter_duplicates);
      });
  }

  async create_device_content(
    device_id: number,
    device_content_dto: product_dto,
  ): Promise<device_content> {
    return this.device_content_repository.create({
      device_id: device_id,
      product_id: (await this.product_service.create(device_content_dto))
        .product.product_id,
    });
  }

  async take_product_out_of_device(
    device_id: number,
    device_content_dto: product_dto,
  ): Promise<device_content> {
    return this.device_content_repository
      .findOne({
        where: { device_id: device_id },
        include: [
          {
            model: this.sequelize.models.product,
            as: 'product',
            where: {
              [Op.or]: [
                { ean: device_content_dto.ean },
                { class_id: device_content_dto.class_id },
              ],
            },
          },
        ],
      })
      .then((device_content) => {
        device_content.update({ dropped_out: new Date(Date.now()) });
        return device_content;
      });
  }
}
