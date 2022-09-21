import { Inject, Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { fridge_user_device_relation_service } from '../fridge_user_device_relation/fridge_user_device_relation.service';
import { create_device_dto, update_device_dto } from './device.dto';
import { device } from './device.entity';

@Injectable()
export class device_service {
  constructor(
    @Inject('SEQUELIZE')
    private sequelize: Sequelize,
    @Inject('DEVICE_REPOSITORY')
    private device_repository: typeof device,
    private fridge_user_device_relation_service: fridge_user_device_relation_service,
  ) {
    this.device_repository = sequelize.getRepository(device);
  }

  async findOneByDeviceId(device_id: number): Promise<device> {
    return this.device_repository.findByPk(device_id);
  }

  async create(login: string, device: create_device_dto): Promise<device> {
    const device_entity = await this.device_repository.create(device);
    this.fridge_user_device_relation_service.create(
      login,
      device_entity.device_id,
    );
    return device_entity;
  }

  async findAll(): Promise<device[]> {
    return this.device_repository.findAll();
  }

  async findOne(id: number): Promise<device> {
    return this.device_repository.findOne({ where: { device_id: id } });
  }

  async update(id: number, device: update_device_dto): Promise<device> {
    await this.device_repository.update(device, { where: { device_id: id } });
    return this.device_repository.findOne({ where: { device_id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.fridge_user_device_relation_service.delete(id);
  }
}
