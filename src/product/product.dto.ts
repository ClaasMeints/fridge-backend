import { IsBase64, IsInt, IsPositive } from 'class-validator';

// class_id is identified by a ML-Model on the device
export class product_dto {
  class_id: number;
  ean: string;
}

// class_meta_data is send from the device to the server which determines the class_id
// export class device_content_dto {
//   @IsBase64()
//   class_meta_data: string;
//   ean: string;
// }

export class product_ean_dto {
  name: string;
  @IsBase64()
  image: string;
  @IsInt()
  @IsPositive()
  quantity: string;
}
