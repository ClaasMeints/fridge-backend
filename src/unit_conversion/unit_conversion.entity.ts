import { IsDecimal } from 'class-validator';
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { unit } from '../unit/unit.entity';

@Table({ tableName: 'unit_conversion' })
export class unit_conversion extends Model<unit_conversion> {
  @PrimaryKey
  @Column
  @ForeignKey(() => unit)
  unit_factor_id: number;
  @BelongsTo(() => unit)
  unit_factor: unit;

  @PrimaryKey
  @Column
  @ForeignKey(() => unit)
  unit_result_id: number;
  @BelongsTo(() => unit)
  unit_result: unit;

  @Default(1)
  @Column({ type: DataType.DECIMAL(10, 2) })
  @IsDecimal()
  factor: number;
}
