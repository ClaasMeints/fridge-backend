import { IsInt, IsPositive } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { fridge_user } from '../fridge_user/fridge_user.entity';
import { product_class } from '../product_class/product_class.entity';

@Entity('shopping_list')
export class shopping_list {
  @PrimaryColumn()
  @ManyToOne(() => product_class, (product_class) => product_class.class_id)
  class_id: number;

  @PrimaryColumn()
  @ManyToOne(() => fridge_user, (fridge_user) => fridge_user.login)
  login: string;

  @Column({ default: 1 })
  @IsInt()
  @IsPositive()
  quantity: number;
}
