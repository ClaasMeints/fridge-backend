import { IsDate } from 'class-validator';
import { device } from '../device/device.entity';
import { product } from '../product/product.entity';
import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'device_content' })
export class device_content extends Model<device_content> {
  @PrimaryKey
  @Column
  @ForeignKey(() => device)
  device_id: number;
  @BelongsTo(() => device)
  device: device;

  @PrimaryKey
  @CreatedAt
  @Column
  @IsDate()
  filled_in: Date;

  @Column
  @ForeignKey(() => product)
  product_id: number;
  @BelongsTo(() => product)
  product: product;

  @AllowNull
  @Column
  @IsDate()
  opened: Date;

  @AllowNull
  @Column
  @IsDate()
  dropped_out: Date;

  @Default(100)
  @Column
  percentage_left: number;
}
