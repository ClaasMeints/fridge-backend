import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { device } from '../device/device.entity';
import { fridge_user } from '../fridge_user/fridge_user.entity';

@Table({ tableName: 'fridge_user_device_relation' })
export class fridge_user_device_relation extends Model<fridge_user_device_relation> {
  @PrimaryKey
  @ForeignKey(() => fridge_user)
  @Column
  login: string;
  @BelongsTo(() => fridge_user)
  fridge_user: fridge_user;

  @PrimaryKey
  @ForeignKey(() => device)
  @Column
  device_id: number;
  @BelongsTo(() => device)
  device: device;
}
