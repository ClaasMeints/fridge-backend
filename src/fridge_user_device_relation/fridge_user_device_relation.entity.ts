import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { device } from '../device/device.entity';
import { fridge_user } from '../fridge_user/fridge_user.entity';

@Entity('fridge_user_device_relation')
export class fridge_user_device_relation {
  @PrimaryColumn()
  @ManyToOne(() => fridge_user, (fridge_user) => fridge_user.login)
  login: string;

  @PrimaryColumn()
  @ManyToOne(() => device, (device) => device.device_id)
  device_id: number;
}
