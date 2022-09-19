import { IsDecimal, IsInt, IsNotEmpty } from 'class-validator';

export class unit_conversion_dto {
  @IsNotEmpty()
  unit_factor_id: number;
  @IsNotEmpty()
  unit_result_id: number;
  @IsDecimal()
  factor: number;
}
