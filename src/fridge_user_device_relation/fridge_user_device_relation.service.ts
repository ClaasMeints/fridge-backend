import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { device_content_dto } from '../device_content/device_content.dto';
import { device_service } from '../device/device.service';
import { product_service } from '../product/product.service';
import { fridge_user_service } from '../fridge_user/fridge_user.service';
import { fridge_user_device_relation } from './fridge_user_device_relation.entity';

@Injectable()
export class fridge_user_device_relation_service {
  constructor(
    private device_service: device_service,
    private product_service: product_service,
    private fridge_user_service: fridge_user_service,
    @InjectRepository(fridge_user_device_relation)
    private fridge_user_device_relation_repository: Repository<fridge_user_device_relation>,
  ) {}

  async get_device_content(login: string): Promise<device_content_dto[]> {
    const result = await this.fridge_user_device_relation_repository.find({
      where: { login: login },
      relations: ['device_content'],
    });
    console.log('result', result);
    return null as any;
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
    return this.fridge_user_device_relation_repository.save(
      this.fridge_user_device_relation_repository.create({ login, device_id }),
    );
  }

  async delete(device_id: number): Promise<void> {
    const fridge_user_device_relation_entity =
      await this.fridge_user_device_relation_repository.findOne({
        relations: ['device'],
        where: { device_id: device_id },
      });
    await this.fridge_user_device_relation_repository.remove(
      fridge_user_device_relation_entity,
    );
  }
}
