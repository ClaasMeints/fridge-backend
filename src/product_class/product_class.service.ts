import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product_category_service } from '../product_category/product_category.service';
import { unit_service } from '../unit/unit.service';
import { product_class_dto } from './product_class.dto';
import { product_class } from './product_class.entity';

@Injectable()
export class product_class_service {
  constructor(
    private unit_service: unit_service,
    private product_category_service: product_category_service,
    @InjectRepository(product_class)
    private product_class_repository: Repository<product_class>,
  ) {}

  async findAll(): Promise<product_class[]> {
    return this.product_class_repository.find();
  }

  async findOne(class_id: number): Promise<product_class> {
    return this.product_class_repository.findOne({ where: { class_id } });
  }

  async create(product_class: product_class_dto): Promise<product_class> {
    return this.product_class_repository.save(
      this.product_class_repository.create(product_class),
    );
  }

  async update(
    class_id: number,
    product_class: product_class_dto,
  ): Promise<product_class> {
    await this.product_class_repository.update({ class_id }, product_class);
    return this.product_class_repository.findOne({ where: { class_id } });
  }

  async delete(class_id: number): Promise<void> {
    await this.product_class_repository.delete(class_id);
  }
}
