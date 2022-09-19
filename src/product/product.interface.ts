import { product_class } from '../product_class/product_class.entity';

export interface product_data {
  product_id: number;
  ean: string;
  class_id: number;
}

export interface product_interface {
  product: product_data;
}
