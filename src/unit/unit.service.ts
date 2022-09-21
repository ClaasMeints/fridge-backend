import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { unit_dto } from './unit.dto';
import { unit } from './unit.entity';

@Injectable()
export class unit_service {
  constructor(
    @Inject('SEQUELIZE')
    private sequelize: Sequelize,
    @Inject('UNIT_REPOSITORY')
    private unit_repository: typeof unit,
  ) {
    this.unit_repository = sequelize.getRepository(unit);
  }

  async findAll(): Promise<unit[]> {
    return await this.unit_repository.findAll();
  }

  async findOne(unit_id: number): Promise<unit> {
    return await this.unit_repository.findOne({
      where: { unit_id },
    });
  }

  async create(unit: unit_dto): Promise<unit> {
    return this.unit_repository.create(unit);
  }

  async update(unit_id: number, unit: unit_dto): Promise<unit> {
    await this.unit_repository.update(unit, { where: { unit_id } });
    return this.unit_repository.findOne({ where: { unit_id } });
  }

  async delete(unit_id: number): Promise<void> {
    await this.unit_repository.destroy({ where: { unit_id } });
  }
}
