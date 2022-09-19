import { unit } from '../unit/unit.entity';

export interface unit_conversion_data {
  unit_factor_id: number;
  unit_result_id: number;
  factor: number;
}

export interface unit_conversion_interface {
  unit_conversion: unit_conversion_data;
}
