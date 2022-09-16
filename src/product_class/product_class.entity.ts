import { IsBase64, IsInt, IsPositive } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { product_category } from '../product_category/product_category.entity';
import { unit } from '../unit/unit.entity';

@Entity('product_class')
export class product_class {
  @PrimaryGeneratedColumn()
  class_id: number;

  @ManyToOne(
    () => product_category,
    (product_category) => product_category.category_id,
  )
  category_id: number;

  @ManyToOne(() => unit, (unit) => unit.unit_id)
  unit_id: number;

  @Column({ nullable: true })
  class_name: string;

  @Column({ type: 'bytea', nullable: true })
  @IsBase64()
  class_image: string;

  @Column({ nullable: true })
  @IsPositive()
  @IsInt()
  storage_life_opend: number;
}
