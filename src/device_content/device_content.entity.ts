import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { IsDate } from 'class-validator';
import { device } from '../device/device.entity';
import { product } from '../product/product.entity';

@Entity('device_content')
export class device_content {
  @ManyToOne(() => device, (device) => device.device_id)
  @PrimaryColumn()
  device_id: number;

  @PrimaryColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @IsDate()
  filled_in: Date;

  @ManyToOne(() => product, (product) => product.product_id)
  product_id: number;

  @Column({ type: 'timestamp', nullable: true })
  @IsDate()
  opened: Date;

  @Column({ type: 'timestamp', nullable: true })
  @IsDate()
  dropped_out: Date;

  @Column({ default: 100 })
  percantage_left: number;
}
