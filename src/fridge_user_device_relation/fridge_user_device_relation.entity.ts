import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { device } from '../device/device.entity';
import { fridge_user } from '../fridge_user/fridge_user.entity';

@Entity('fridge_user_device_relation')
export class fridge_user_device_relation {
  @PrimaryColumn()
  login: string;
  @ManyToOne(
    () => fridge_user,
    (fridge_user) => fridge_user.fridge_user_device_relation,
  )
  @JoinColumn({ name: 'login' })
  fridge_user: fridge_user;

  @PrimaryColumn()
  device_id: number;
  @ManyToOne(() => device, (device) => device.fridge_user_device_relation)
  @JoinColumn({ name: 'device_id' })
  device: device;
}
