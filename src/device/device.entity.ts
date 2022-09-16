import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { device_content } from '../device_content/device_content.entity';

@Entity('device')
export class device {
  @PrimaryGeneratedColumn()
  device_id: number;

  @Column()
  device_name: string;
}
