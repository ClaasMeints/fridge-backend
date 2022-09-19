import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { fridge_user_device_relation_service } from '../fridge_user_device_relation/fridge_user_device_relation.service';
import { create_device_dto, update_device_dto } from './device.dto';
import { device } from './device.entity';

@Injectable()
export class device_service {
  constructor(
    private fridge_user_device_relation_service: fridge_user_device_relation_service,
    @InjectRepository(device)
    private device_repository: Repository<device>,
  ) {}

  async findOneByDeviceId(device_id: number): Promise<device> {
    return this.device_repository.findOne({ where: { device_id: device_id } });
  }

  async create(login: string, device: create_device_dto): Promise<device> {
    const device_entity = await this.device_repository.save(
      this.device_repository.create(device),
    );
    this.fridge_user_device_relation_service.create(
      login,
      device_entity.device_id,
    );
    return device_entity;
  }

  async findAll(): Promise<device[]> {
    return this.device_repository.find();
  }

  async findOne(id: number): Promise<device> {
    return this.device_repository.findOne({ where: { device_id: id } });
  }

  async update(id: number, device: update_device_dto): Promise<device> {
    await this.device_repository.update({ device_id: id }, device);
    return this.device_repository.findOne({ where: { device_id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.fridge_user_device_relation_service.delete(id);
  }
}
