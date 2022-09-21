import { IsBase64, IsInt, IsPositive } from 'class-validator';
import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { product } from '../product/product.entity';
import { product_category } from '../product_category/product_category.entity';
import { required_content } from '../required_content/required_content.entity';
import { shopping_list } from '../shopping_list/shopping_list.entity';
import { unit } from '../unit/unit.entity';

@Table({ tableName: 'product_class' })
export class product_class extends Model<product_class> {
  @PrimaryKey
  @AutoIncrement
  @Column
  class_id: number;

  @ForeignKey(() => product_category)
  @Column
  category_id: number;
  @BelongsTo(() => product_category)
  category: product_category;

  @Column
  @ForeignKey(() => unit)
  unit_id: number;
  @BelongsTo(() => unit)
  unit: unit;

  @Column
  class_name: string;

  @AllowNull
  @Default(null)
  @Column // TODO: add a default image and remove nullable
  @IsBase64()
  class_image: string;

  @AllowNull
  @Column
  @IsPositive()
  @IsInt()
  storage_life_opened: number;

  @HasMany(() => product)
  product: product[];

  @HasMany(() => required_content)
  required_content: required_content[];

  @HasMany(() => shopping_list)
  shopping_list: shopping_list[];
}
