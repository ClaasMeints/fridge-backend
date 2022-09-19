import { IsBase64 } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { product_class } from '../product_class/product_class.entity';

@Entity('product_category')
export class product_category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  category_name: string;

  @Column({ type: 'bytea', nullable: true })
  @IsBase64()
  category_icon: Buffer;

  @OneToMany(() => product_class, (product_class) => product_class.category_id)
  product_class: product_class[];
}
