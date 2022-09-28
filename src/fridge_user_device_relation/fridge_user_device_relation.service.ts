import { Inject, Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { Sequelize } from 'sequelize-typescript';
import { device_content_dto } from '../device_content/device_content.dto';
import { product_service } from '../product/product.service';
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
    const result = [];
    await this.fridge_user_device_relation_repository
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
                attributes: ['product_id'],
              },
            ],
          },
        ],
      })
      .then(async (fridge_user_device_relations) => {
        fridge_user_device_relations.forEach(
          async (fridge_user_device_relation) => {
            fridge_user_device_relation.device.device_content.forEach(
              async (device_content) => {
                console.log('device_content', device_content);
              },
            );
          },
        );
      });
    return result;

    // const result = [];
    // await this.fridge_user_device_relation_repository
    //   .findAll({
    //     where: { login: login },
    //     include: [
    //       {
    //         model: this.sequelize.models.device,
    //         as: 'device',
    //         include: [
    //           {
    //             model: this.sequelize.models.device_content,
    //             as: 'device_content',
    //             // where: {
    //             //   percentage_left: { $gt: 0 },
    //             //   dropped_out: { $eq: null },
    //             // },
    //             include: [
    //               {
    //                 model: this.sequelize.models.product,
    //                 as: 'product',
    //                 attributes: ['ean'],
    //                 include: [
    //                   {
    //                     model: this.sequelize.models.product_class,
    //                     as: 'product_class',
    //                     attributes: ['class_name', 'class_image'],
    //                     include: [
    //                       {
    //                         model: this.sequelize.models.unit,
    //                         as: 'unit',
    //                         attributes: ['unit_symbol'],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   })
    //   .then((fridge_user_device_relations) => {
    //     console.log(
    //       'fridge_user_device_relations',
    //       fridge_user_device_relations,
    //     );
    //     fridge_user_device_relations.forEach((fridge_user_device_relation) => {
    //       console.log(
    //         'fridge_user_device_relation',
    //         fridge_user_device_relation,
    //       );
    //       fridge_user_device_relation.device.device_content.forEach(
    //         async (content) => {
    //           console.log('content', content);
    //           result.push(
    //             await this.product_service
    //               .get_product_data(content.product.ean)
    //               .then((product_data) => {
    //                 return {
    //                   name:
    //                     product_data.name ||
    //                     content.product.product_class.class_name,
    //                   image:
    //                     product_data.image ||
    //                     content.product.product_class.class_image,
    //                   quantity: product_data.quantity || 1,
    //                   unit_symbol:
    //                     content.product.product_class.unit.unit_symbol,
    //                   expiry_date: new Date(
    //                     Date.now() + 1000 * 60 * 60 * 24 * 7,
    //                   ),
    //                 } as device_content_dto;
    //               }),
    //           );
    //         },
    //       );
    //     });
    //   });
    // return result;
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
