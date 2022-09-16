import { IsInt, IsPositive } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { device } from '../device/device.entity';
import { product_class } from '../product_class/product_class.entity';

@Entity('required_content')
export class required_content {
  @PrimaryColumn()
  @ManyToOne(() => product_class, (product_class) => product_class.class_id)
  class_id: number;

  @PrimaryColumn()
  @ManyToOne(() => device, (device) => device.device_id)
  device_id: number;

  @Column({ default: 1 })
  @IsInt()
  @IsPositive()
  quantity: number;
}
