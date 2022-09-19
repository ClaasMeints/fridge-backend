import { IsBase64, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class product_class_dto {
  @IsNotEmpty()
  class_name: string;
  @IsBase64()
  class_image: string;
  @IsInt()
  @IsPositive()
  storage_life_opened: number;
  category_id: number;
  unit_id: number;
}
