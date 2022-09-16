import { IsEAN } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { product_class } from '../product_class/product_class.entity';

@Entity('product')
export class product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ nullable: true })
  @IsEAN()
  ean: string;

  @ManyToOne(() => product_class, (product_class) => product_class.class_id)
  class_id: number;
}
