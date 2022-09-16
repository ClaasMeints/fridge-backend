import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { device_dto } from './device.dto';
import { device } from './device.entity';

@Injectable()
export class device_service {
  constructor(
    @InjectRepository(device)
    private device_repository: Repository<device>,
  ) {}

  async create(device: device_dto): Promise<device> {
    return this.device_repository.save(device);
  }

  async findAll(): Promise<device[]> {
    return this.device_repository.find();
  }

  async findOne(id: number): Promise<device> {
    return this.device_repository.findOne({ where: { device_id: id } });
  }

  async update(id: number, device: device_dto): Promise<device> {
    await this.device_repository.update({ device_id: id }, device);
    return this.device_repository.findOne({ where: { device_id: id } });
  }

  async delete(id: number): Promise<device> {
    const device = await this.device_repository.findOne({
      where: { device_id: id },
    });
    await this.device_repository.delete({ device_id: id });
    return device;
  }
}
