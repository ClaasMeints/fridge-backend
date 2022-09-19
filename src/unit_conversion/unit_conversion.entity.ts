import { IsDecimal } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { unit } from '../unit/unit.entity';

@Entity('unit_conversion')
export class unit_conversion {
  @PrimaryColumn()
  unit_factor_id: number;
  @ManyToOne(() => unit, (unit) => unit.unit_conversion)
  @JoinColumn({ name: 'unit_factor_id' })
  unit_factor: unit;

  @PrimaryColumn()
  unit_result_id: number;
  @ManyToOne(() => unit, (unit) => unit.unit_conversion)
  @JoinColumn({ name: 'unit_result_id' })
  unit_result: unit;

  @Column({ default: 1, type: 'decimal' })
  @IsDecimal()
  factor: number;
}
