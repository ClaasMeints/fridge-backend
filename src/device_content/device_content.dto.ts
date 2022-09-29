// import { IsBase64, IsInt, IsPositive } from 'class-validator';

import { IsBase64, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class device_content_dto {
  constructor(
    name: string,
    image: string,
    quantity_str: string,
    quantity: number,
    unit: string,
    expiry_date: Date,
  ) {
    this.name = name;
    this.image = image;
    this.quantity_str = quantity_str;
    this.quantity = quantity;
    this.unit_symbol = unit;
    this.expiry_date = expiry_date;
  }

  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsBase64()
  image: string;
  quantity_str: string;
  @IsInt()
  @IsPositive()
  quantity: number;
  unit_symbol: string;
  @IsNotEmpty()
  expiry_date: Date;
}
