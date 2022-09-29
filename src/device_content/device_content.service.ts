import { Inject, Injectable } from '@nestjs/common';
import { count } from 'console';
import { filter } from 'rxjs';
import { Sequelize } from 'sequelize-typescript';
import { fridge_user_device_relation_service } from '../fridge_user_device_relation/fridge_user_device_relation.service';
import { product_dto } from '../product/product.dto';
import { product_service } from '../product/product.service';
import { device_content_dto } from './device_content.dto';
import { device_content } from './device_content.entity';
import { device_content_interface } from './device_content.interface';

@Injectable()
export class device_content_service {
  constructor(
    @Inject('SEQUELIZE')
    private sequelize: Sequelize,
    private product_service: product_service,
    private fridge_user_device_relation_service: fridge_user_device_relation_service,
    @Inject('DEVICE_CONTENT_REPOSITORY')
    private device_content_repository: typeof device_content,
  ) {
    this.device_content_repository = sequelize.getRepository(device_content);
  }

  async findAll(login: string): Promise<device_content_dto[]> {
    return this.device_content_repository
      .findAll({
        raw: true,
        nest: true,
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
          {
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
          },
        ],
      })
      .then((device_contents) => {
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
                unit_symbol:
                  device_content.product.product_class.unit.unit_symbol,
                expiry_date: device_content.filled_in,
              } as device_content_dto;
            });
        });
      })
      .then((device_content_dtos) => {
        return Promise.all(device_content_dtos).then((device_content_dtos) => {
          // filter duplicates and sum up quantities
          return device_content_dtos
            .map((device_content_dto) => {
              return {
                ...device_content_dto,
                quantity: device_content_dtos.filter(
                  (name) => name.name === device_content_dto.name,
                ).length,
              };
            })
            .filter(
              (device_content_dto, index, self) =>
                index ===
                self.findIndex((t) => t.name === device_content_dto.name),
            );
        });
      });
  }

  async findOne(device_id: number): Promise<void | device_content_dto[]> {
    const result = [];
    await this.device_content_repository
      .findAll({
        where: { device_id: device_id },
        attributes: ['filled_in'],
        include: [
          {
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
          },
        ],
      })
      .then(() => {
        async (device_content) => {
          result.push(
            await this.product_service
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
                  unit_symbol:
                    device_content.product.product_class.unit.unit_symbol,
                  expiry_date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                } as device_content_dto;
              }),
          );
        };
      });
    return result;
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
  ): Promise<device_content_interface> {
    throw new Error('Method not implemented.'); // TODO: implement
  }
}
