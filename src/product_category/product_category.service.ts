import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product_category_dto } from './product_category.dto';
import { product_category } from './product_category.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class product_category_service {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(product_category)
    private product_category_repository: Repository<product_category>,
  ) {}

  async findAll(): Promise<product_category[]> {
    return await this.product_category_repository.find();
  }

  async findOne(category_id: number): Promise<product_category> {
    return await this.product_category_repository.findOne({
      where: { category_id },
    });
  }

  async create(
    product_category: product_category_dto,
  ): Promise<product_category> {
    return await this.product_category_repository.save(
      this.product_category_repository.create({
        category_name: product_category.category_name,
        category_icon: await this.httpService.axiosRef
          .get(product_category.category_icon)
          .then((response) => {
            return Buffer.from(response.data, 'binary');
          }),
      }),
    );
  }

  async update(
    category_id: number,
    product_category: product_category_dto,
  ): Promise<product_category> {
    await this.product_category_repository.update(category_id, {
      category_name: product_category.category_name,
      category_icon: await this.httpService.axiosRef
        .get(product_category.category_icon)
        .then((response) => {
          return Buffer.from(response.data, 'binary');
        }),
    });
    return this.product_category_repository.findOne({ where: { category_id } });
  }

  async delete(category_id: number): Promise<void> {
    await this.product_category_repository.delete(category_id);
  }
}
