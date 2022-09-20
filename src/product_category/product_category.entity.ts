import { IsBase64 } from 'class-validator';
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

@Table({ tableName: 'product' })
export class product_category extends Model<product_category> {
  @PrimaryKey
  @AutoIncrement
  @Column
  category_id: number;

  @Column
  category_name: string;

  @AllowNull
  @Column
  @IsBase64()
  category_icon: Buffer;

  @HasMany(() => product_class)
  product_class: product_class[];
}
