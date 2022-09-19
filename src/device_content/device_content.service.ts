import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { device_service } from '../device/device.service';
import { fridge_user_device_relation_service } from '../fridge_user_device_relation/fridge_user_device_relation.service';
import { product_dto } from '../product/product.dto';
import { product_service } from '../product/product.service';
import { device_content_dto } from './device_content.dto';
import { device_content } from './device_content.entity';
import { device_content_interface } from './device_content.interface';

@Injectable()
export class device_content_service {
  constructor(
    private device_service: device_service,
    private product_service: product_service,
    private fridge_user_device_relation_service: fridge_user_device_relation_service,
    @InjectRepository(device_content)
    private device_content_repository: Repository<device_content>,
  ) {}

  async findAll(login: string): Promise<device_content_dto[]> {
    return this.fridge_user_device_relation_service.get_device_content(login);
  }

  async create_device_content(
    device_id: number,
    device_content_dto: product_dto,
  ): Promise<device_content> {
    const device_content_entity = this.device_content_repository.create({
      device_id: device_id,
      product_id: (await this.product_service.create(device_content_dto))
        .product.product_id,
    });
    await this.device_content_repository.save(device_content_entity);
    return device_content_entity;
  }

  async take_product_out_of_device(
    device_id: number,
    device_content_dto: product_dto,
  ): Promise<device_content_interface> {
    throw new Error('Method not implemented.'); // TODO: implement
  }
}
