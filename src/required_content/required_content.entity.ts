import { IsDecimal, IsPositive } from 'class-validator';
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
import { device } from '../device/device.entity';
import { product_class } from '../product_class/product_class.entity';

@Table({ tableName: 'required_content' })
export class required_content extends Model<required_content> {
  @PrimaryKey
  @Column
  @ForeignKey(() => product_class)
  class_id: number;
  @BelongsTo(() => product_class)
  class: product_class;

  @PrimaryKey
  @Column
  @ForeignKey(() => device)
  device_id: number;
  @BelongsTo(() => device)
  device: device;

  @Default(1)
  @Column({ type: DataType.DECIMAL(10, 2) })
  @IsDecimal()
  @IsPositive()
  quantity: number;
}
