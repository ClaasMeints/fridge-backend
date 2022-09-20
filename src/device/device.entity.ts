import {
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  Default,
  HasMany,
  Model,
} from 'sequelize-typescript';
import { device_content } from '../device_content/device_content.entity';

@Table({ tableName: 'device' })
export class device extends Model<device> {
  @PrimaryKey
  @AutoIncrement
  @Column
  device_id: number;

  @Default('Unbenanntes Gerät')
  @Column
  device_name: string;

  @HasMany(() => device_content)
  device_content: device_content[];
}
