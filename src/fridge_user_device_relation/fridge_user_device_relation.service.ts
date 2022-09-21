import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { device } from '../device/device.entity';
import { device_content_dto } from '../device_content/device_content.dto';
import { device_content } from '../device_content/device_content.entity';
import { product } from '../product/product.entity';
import { product_service } from '../product/product.service';
import { product_class } from '../product_class/product_class.entity';
import { unit } from '../unit/unit.entity';
import { fridge_user_device_relation } from './fridge_user_device_relation.entity';

@Injectable()
export class fridge_user_device_relation_service {
  constructor(
    @Inject('SEQUELIZE')
    private sequelize: Sequelize,
    private product_service: product_service,
    @Inject('FRIDGE_USER_DEVICE_RELATION_REPOSITORY')
    private fridge_user_device_relation_repository: typeof fridge_user_device_relation,
  ) {
    this.fridge_user_device_relation_repository = sequelize.getRepository(
      fridge_user_device_relation,
    );
  }

  async get_device_content(
    login: string,
  ): Promise<void | device_content_dto[]> {
    return this.fridge_user_device_relation_repository
      .findAll({
        where: { login: login },
        include: [
          {
            model: this.sequelize.models.device,
            as: 'device',
            include: [
              {
                model: this.sequelize.models.device_content,
                as: 'device_content',
                // where: {
                //   percentage_left: { $gt: 0 },
                //   dropped_out: { $eq: null },
                // },
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
              },
            ],
          },
        ],
      })
      .then((fridge_user_device_relation) => {
        console.log(fridge_user_device_relation);
        fridge_user_device_relation.flatMap((fridge_user_device_relation) => {
          return fridge_user_device_relation.device.device_content.map(
            (device_content) => {
              this.product_service
                .get_product_data(device_content.product.ean)
                .then((product_data) => {
                  return {
                    name:
                      product_data.name ||
                      device_content.product.product_class.class_name,
                    image:
                      product_data.image ||
                      device_content.product.product_class.class_image,
                    quantity: product_data.quantity || 1,
                    unit_symbol:
                      device_content.product.product_class.unit.unit_symbol,
                    expiry_date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                  } as device_content_dto;
                });
            },
          );
        });
      });
  }

  async create(
    login: string,
    device_id: number,
  ): Promise<fridge_user_device_relation> {
    return this.fridge_user_device_relation_repository.create({
      login: login,
      device_id: device_id,
    });
  }

  async delete(device_id: number): Promise<void> {
    await this.fridge_user_device_relation_repository.destroy({
      where: { device_id: device_id },
    });
  }
}
