import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { device_content } from '../device_content/device_content.entity';
import { fridge_user_device_relation } from '../fridge_user_device_relation/fridge_user_device_relation.entity';
import { required_content } from '../required_content/required_content.entity';

@Entity('device')
export class device {
  @PrimaryGeneratedColumn()
  device_id: number;

  @Column({ default: 'Unbenanntes Gerät' })
  device_name: string;

  @OneToMany(() => device_content, (device_content) => device_content.device_id)
  device_content: device_content[];

  @OneToMany(
    () => required_content,
    (required_content) => required_content.device_id,
  )
  required_content: required_content[];

  @OneToMany(
    () => fridge_user_device_relation,
    (fridge_user_device_relation) => fridge_user_device_relation.device_id,
  )
  fridge_user_device_relation: fridge_user_device_relation[];
}
