import { IsEAN } from 'class-validator';
import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { device_content } from '../device_content/device_content.entity';
import { product_class } from '../product_class/product_class.entity';

@Table({ tableName: 'product' })
export class product extends Model<product> {
  @PrimaryKey
  @AutoIncrement
  @Column
  product_id: number;

  @AllowNull
  @Column
  @IsEAN()
  ean: string;

  @ForeignKey(() => product_class)
  @Column
  class_id: number;
  @BelongsTo(() => product_class)
  class: product_class;

  @HasMany(() => device_content)
  device_content: product[];
}
