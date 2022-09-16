import { IsInt } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { unit } from '../unit/unit.entity';

@Entity('unit_conversion')
export class unit_conversion {
  @PrimaryColumn()
  @ManyToOne(() => unit, (unit) => unit.unit_id)
  unit_factor_id: number;

  @PrimaryColumn()
  @ManyToOne(() => unit, (unit) => unit.unit_id)
  unit_result_id: number;

  @Column({ default: 1 })
  @IsInt()
  factor: number;
}
