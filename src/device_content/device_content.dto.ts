// import { IsBase64, IsInt, IsPositive } from 'class-validator';

import { IsBase64, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class device_content_dto {
  constructor(
    name: string,
    image: string,
    quantity: number,
    unit: string,
    expiry_date: Date,
  ) {
    this.name = name;
    this.image = image;
    this.quantity = quantity;
    this.unit_symbol = unit;
    this.expiry_date = expiry_date;
  }

  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsBase64()
  image: string;
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  quantity: number;
  @IsNotEmpty()
  unit_symbol: string;
  @IsNotEmpty()
  expiry_date: Date;
}
