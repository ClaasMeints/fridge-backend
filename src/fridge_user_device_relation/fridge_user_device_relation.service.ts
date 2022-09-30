import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
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
