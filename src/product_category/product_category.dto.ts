import { IsNotEmpty, IsUrl } from 'class-validator';

export class product_category_dto {
  @IsNotEmpty()
  category_name: string;
  @IsUrl()
  category_icon: string;
}
