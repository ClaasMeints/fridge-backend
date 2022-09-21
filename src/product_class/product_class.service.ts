import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { product_category_service } from '../product_category/product_category.service';
import { unit_service } from '../unit/unit.service';
import { product_class_dto } from './product_class.dto';
import { product_class } from './product_class.entity';

@Injectable()
export class product_class_service {
  constructor(
    @Inject('SEQUELIZE')
    private sequelize: any,
    private product_category_service: product_category_service,
    private unit_service: unit_service,
    @Inject('PRODUCT_CLASS_REPOSITORY')
    private product_class_repository: typeof product_class,
  ) {
    this.product_class_repository = sequelize.getRepository(product_class);
  }

  async findAll(): Promise<product_class[]> {
    return this.product_class_repository.findAll();
  }

  async findOne(class_id: number): Promise<product_class> {
    return this.product_class_repository.findOne({ where: { class_id } });
  }

  async create(product_class: product_class_dto): Promise<product_class> {
    return this.product_class_repository.create(product_class);
  }

  async update(
    class_id: number,
    product_class: product_class_dto,
  ): Promise<product_class> {
    await this.product_class_repository.update(product_class, {
      where: { class_id },
    });
    return this.product_class_repository.findOne({ where: { class_id } });
  }

  async delete(class_id: number): Promise<void> {
    await this.product_class_repository.destroy({ where: { class_id } });
  }
}
