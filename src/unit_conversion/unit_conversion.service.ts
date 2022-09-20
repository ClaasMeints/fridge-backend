import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { unit_conversion_dto } from './unit_conversion.dto';
import { unit_conversion } from './unit_conversion.entity';

@Injectable()
export class unit_conversion_service {
  constructor(
    private unit_conversion_repository: Repository<unit_conversion>,
  ) {}

  async findAll(): Promise<unit_conversion[]> {
    return await this.unit_conversion_repository.findAll();
  }

  async create(unit_conversion: unit_conversion_dto): Promise<unit_conversion> {
    return await this.unit_conversion_repository.create(unit_conversion);
  }

  async update(unit_conversion: unit_conversion_dto): Promise<any> {
    return await this.unit_conversion_repository.update(
      // update the unit_conversion
      {
        unit_factor_id: unit_conversion.unit_factor_id,
        unit_result_id: unit_conversion.unit_result_id,
      },
      {
        where: {
          unit_factor_id: unit_conversion.unit_factor_id,
          unit_result_id: unit_conversion.unit_result_id,
        },
      },
    );
  }

  async delete(unit_conversion: unit_conversion_dto): Promise<void> {
    await this.unit_conversion_repository.destroy({
      where: {
        unit_factor_id: unit_conversion.unit_factor_id,
        unit_result_id: unit_conversion.unit_result_id,
      },
    });
  }
}
