import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { product_class_service } from '../product_class/product_class.service';
import { product_dto, product_ean_dto } from './product.dto';
import { product } from './product.entity';
import { product_interface } from './product.interface';

@Injectable()
export class product_service {
  constructor(
    @Inject('SEQUELIZE')
    private sequelize: any,
    private product_class_service: product_class_service,
    @Inject('PRODUCT_REPOSITORY')
    private product_repository: typeof product,
  ) {
    this.product_repository = sequelize.getRepository(product);
  }

  async get_product_data(ean: string): Promise<product_ean_dto> {
    return { name: null, image: null, quantity: null }; // OPTIONAL: implement
  }

  async create(product: product_dto): Promise<product_interface> {
    return {
      product: await this.product_repository.create(product),
    };
  }
}
