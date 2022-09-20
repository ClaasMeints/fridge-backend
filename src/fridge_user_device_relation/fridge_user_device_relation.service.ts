import { Injectable } from '@nestjs/common';
import { repeat } from 'rxjs';
import { Repository } from 'sequelize-typescript';
import { arrayBuffer } from 'stream/consumers';
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
    private product_service: product_service,
    private fridge_user_device_relation_repository: Repository<fridge_user_device_relation>,
  ) {}

  async get_device_content(login: string): Promise<device_content_dto[]> {
    return (
      await Promise.all(
        await this.fridge_user_device_relation_repository.findAll({
          where: { login: login },
          include: [
            {
              model: device,
              as: 'device',
              include: [
                {
                  model: device_content,
                  as: 'device_content',
                  where: {
                    percentage_left: { $gt: 0 },
                    dropped_out: { $eq: null },
                  },
                  include: [
                    {
                      model: product,
                      as: 'product',
                      attributes: ['ean'],
                      include: [
                        {
                          model: product_class,
                          as: 'product_class',
                          attributes: ['class_name', 'class_image'],
                          include: [
                            {
                              model: unit,
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
        }),
      )
    ).flatMap((fridge_user_device_relation) => {
        return fridge_user_device_relation.device.device_content.flatMap((device_content) => {
          await this.product_service.get_product_data(
            device_content.product.ean,
          );
          return {
            product_data.name || device_content.name,
            product_data.image || device_content.image,
            product_data.quantity || 1,
            device_content.unit_symbol,
            new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
          } as device_content_dto;
        });
      });
    }



    // const device_content = await this.fridge_user_device_relation_repository
    //   .createQueryBuilder()
    //   .innerJoin('fridge_user_device_relation.device_id', 'device')
    //   .where('fridge_user_device_relation.login = :login', { login })
    //   .innerJoin('device.device_content', 'device_content')
    //   .innerJoin('device_content.product_id', 'product')
    //   .where('device_content.dropped_out IS NULL')
    //   .andWhere('device_content.percentage_left > 0')
    //   .innerJoin('product.class_id', 'product_class')
    //   .innerJoin('product_class.unit_id', 'unit')
    //   .select([
    //     'product.ean as ean',
    //     'product_class.class_name as name',
    //     'product_class.class_image as image',
    //     'unit.unit_symbol as unit_symbol',
    //   ])
    //   .getRawMany()
    //   .then((device_content) => {
    //     return device_content.map(async (device_content) => {
    //       const product_data = await this.product_service.get_product_data(
    //         device_content.ean,
    //       );
    //       return new device_content_dto(
    //         product_data.name || device_content.name,
    //         product_data.image || device_content.image,
    //         product_data.quantity || 1,
    //         device_content.unit_symbol,
    //         new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // TODO: find a way to get more reasonable expiry dates
    //       );
    //     });
    //   });

    // return Promise.all(device_content);
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
