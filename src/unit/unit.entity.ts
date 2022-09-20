import {
  AllowNull,
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { product_class } from '../product_class/product_class.entity';
import { unit_conversion } from '../unit_conversion/unit_conversion.entity';

@Table({ tableName: 'unit' })
export class unit extends Model<unit> {
  @PrimaryKey
  @AutoIncrement
  @Column
  unit_id: number;

  @AllowNull
  @Column
  unit_name: string;

  @Column
  unit_symbol: string;

  @HasMany(() => product_class)
  product_class: product_class[];

  @HasMany(() => unit_conversion)
  unit_conversion: unit_conversion[];
}
