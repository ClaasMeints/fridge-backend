import { IsDecimal, IsInt, IsPositive } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { fridge_user } from '../fridge_user/fridge_user.entity';
import { product_class } from '../product_class/product_class.entity';

@Entity('shopping_list')
export class shopping_list {
  @PrimaryColumn()
  class_id: number;
  @ManyToOne(
    () => product_class,
    (product_class) => product_class.shopping_list,
  )
  @JoinColumn({ name: 'class_id' })
  class: product_class;

  @PrimaryColumn()
  login: string;
  @ManyToOne(() => fridge_user, (fridge_user) => fridge_user.shopping_list)
  @JoinColumn({ name: 'login' })
  fridge_user: fridge_user;

  @Column({ default: 1, type: 'decimal' })
  @IsDecimal()
  @IsPositive()
  quantity: number;
}
