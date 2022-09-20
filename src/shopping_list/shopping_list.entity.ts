import { IsDecimal, IsPositive } from 'class-validator';
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { fridge_user } from '../fridge_user/fridge_user.entity';
import { product_class } from '../product_class/product_class.entity';

@Table({ tableName: 'shopping_list' })
export class shopping_list extends Model<shopping_list> {
  @PrimaryKey
  @Column
  @ForeignKey(() => product_class)
  class_id: number;
  @BelongsTo(() => product_class)
  class: product_class;

  @PrimaryKey
  @Column
  @ForeignKey(() => fridge_user)
  login: string;
  @BelongsTo(() => fridge_user)
  fridge_user: fridge_user;

  @Default(1)
  @Column({ type: DataType.DECIMAL(10, 2) })
  @IsDecimal()
  @IsPositive()
  quantity: number;
}
