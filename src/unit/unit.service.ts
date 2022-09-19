import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { unit_dto } from './unit.dto';
import { unit } from './unit.entity';

@Injectable()
export class unit_service {
  constructor(
    @InjectRepository(unit)
    private unit_repository: Repository<unit>,
  ) {}

  async findAll(): Promise<unit[]> {
    return await this.unit_repository.find();
  }

  async findOne(unit_id: number): Promise<unit> {
    return await this.unit_repository.findOne({
      where: { unit_id },
    });
  }

  async create(unit: unit_dto): Promise<unit> {
    return this.unit_repository.save(this.unit_repository.create(unit));
  }

  async update(unit_id: number, unit: unit_dto): Promise<unit> {
    await this.unit_repository.update(unit_id, unit);
    return this.unit_repository.findOne({ where: { unit_id } });
  }

  async delete(unit_id: number): Promise<void> {
    await this.unit_repository.delete(unit_id);
  }
}
