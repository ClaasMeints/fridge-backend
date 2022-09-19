import { IsEAN } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { product_class } from '../product_class/product_class.entity';

@Entity('product')
export class product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ nullable: true })
  @IsEAN()
  ean: string;

  @Column()
  class_id: number;
  @ManyToOne(() => product_class, (product_class) => product_class.product)
  @JoinColumn({ name: 'class_id' })
  class: product_class;

  @OneToMany(() => product, (product) => product.product_id)
  device_content: product[];
}
