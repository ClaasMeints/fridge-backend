import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { IsDate } from 'class-validator';
import { device } from '../device/device.entity';
import { product } from '../product/product.entity';

@Entity('device_content')
export class device_content {
  @PrimaryColumn()
  device_id: number;
  @ManyToOne(() => device, (device_id) => device_id.device_content)
  @JoinColumn({ name: 'device_id' })
  device: device;

  @PrimaryColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @IsDate()
  filled_in: Date;

  @Column()
  product_id: number;
  @ManyToOne(() => product, (product) => product.device_content)
  @JoinColumn({ name: 'product_id' })
  product: product;

  @Column({ type: 'timestamp', nullable: true })
  @IsDate()
  opened: Date;

  @Column({ type: 'timestamp', nullable: true })
  @IsDate()
  dropped_out: Date;

  @Column({ default: 100 })
  percentage_left: number;
}
