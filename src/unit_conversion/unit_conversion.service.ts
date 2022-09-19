import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { unit_service } from '../unit/unit.service';
import { unit_conversion_dto } from './unit_conversion.dto';
import { unit_conversion } from './unit_conversion.entity';

@Injectable()
export class unit_conversion_service {
  constructor(
    private unit_service: unit_service,
    @InjectRepository(unit_conversion)
    private unit_conversion_repository: Repository<unit_conversion>,
  ) {}

  async findAll(): Promise<unit_conversion[]> {
    return await this.unit_conversion_repository.find();
  }

  async create(unit_conversion: unit_conversion_dto): Promise<unit_conversion> {
    return await this.unit_conversion_repository.save(
      this.unit_conversion_repository.create(unit_conversion),
    );
  }

  async update(unit_conversion: unit_conversion_dto): Promise<any> {
    return await this.unit_conversion_repository.update(
      // update the unit_conversion
      {
        unit_factor_id: unit_conversion.unit_factor_id,
        unit_result_id: unit_conversion.unit_result_id,
      },
      unit_conversion,
    );
  }

  async delete(unit_conversion: unit_conversion_dto): Promise<void> {
    await this.unit_conversion_repository.remove(
      await this.unit_conversion_repository.findOne({
        where: {
          unit_factor_id: unit_conversion.unit_factor_id,
          unit_result_id: unit_conversion.unit_result_id,
        },
      }),
    );
  }
}
