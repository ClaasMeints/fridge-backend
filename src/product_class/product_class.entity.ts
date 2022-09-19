import { IsBase64, IsInt, IsPositive } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { product } from '../product/product.entity';
import { product_category } from '../product_category/product_category.entity';
import { required_content } from '../required_content/required_content.entity';
import { shopping_list } from '../shopping_list/shopping_list.entity';
import { unit } from '../unit/unit.entity';

@Entity('product_class')
export class product_class {
  @PrimaryGeneratedColumn()
  class_id: number;

  @Column()
  category_id: number;
  @ManyToOne(
    () => product_category,
    (product_category) => product_category.product_class,
  )
  @JoinColumn({ name: 'category_id' })
  category: product_category;

  @Column()
  unit_id: number;
  @ManyToOne(() => unit, (unit) => unit.product_class)
  @JoinColumn({ name: 'unit_id' })
  unit_: unit;

  @Column()
  class_name: string;

  @Column({ type: 'bytea', default: null, nullable: true }) // TODO: add a default image and remove nullable
  @IsBase64()
  class_image: string;

  @Column({ nullable: true })
  @IsPositive()
  @IsInt()
  storage_life_opened: number;

  @OneToMany(() => product, (product) => product.class_id)
  product: product[];

  @OneToMany(
    () => required_content,
    (required_content) => required_content.class_id,
  )
  required_content: required_content[];

  @OneToMany(() => shopping_list, (shopping_list) => shopping_list.class_id)
  shopping_list: shopping_list[];
}
