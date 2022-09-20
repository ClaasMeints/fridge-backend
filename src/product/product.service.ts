import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { product_class_service } from '../product_class/product_class.service';
import { product_dto, product_ean_dto } from './product.dto';
import { product } from './product.entity';
import { product_interface } from './product.interface';

@Injectable()
export class product_service {
  constructor(
    private product_class_service: product_class_service,
    private product_repository: Repository<product>,
  ) {}

  async get_product_data(ean: string): Promise<product_ean_dto> {
    return {
      name: 'Test',
      image: 'Test',
      quantity: 1,
    }; // OPTIONAL: implement
  }

  async create(product: product_dto): Promise<product_interface> {
    return {
      product: await this.product_repository.create(product),
    };
  }
}
