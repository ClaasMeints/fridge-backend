import { IsDecimal, IsInt, IsPositive } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { device } from '../device/device.entity';
import { product_class } from '../product_class/product_class.entity';

@Entity('required_content')
export class required_content {
  @PrimaryColumn()
  class_id: number;
  @ManyToOne(
    () => product_class,
    (product_class) => product_class.required_content,
  )
  @JoinColumn({ name: 'class_id' })
  class: product_class;

  @PrimaryColumn()
  device_id: number;
  @ManyToOne(() => device, (device) => device.required_content)
  @JoinColumn({ name: 'device_id' })
  device: device;

  @Column({ default: 1, type: 'decimal' })
  @IsDecimal()
  @IsPositive()
  quantity: number;
}
