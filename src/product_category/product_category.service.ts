import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { product_category_dto } from './product_category.dto';
import { product_category } from './product_category.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class product_category_service {
  constructor(
    private readonly httpService: HttpService,
    private product_category_repository: Repository<product_category>,
  ) {}

  async findAll(): Promise<product_category[]> {
    return await this.product_category_repository.findAll();
  }

  async findOne(category_id: number): Promise<product_category> {
    return await this.product_category_repository.findOne({
      where: { category_id },
    });
  }

  async create(
    product_category: product_category_dto,
  ): Promise<product_category> {
    return await this.product_category_repository.create({
      category_name: product_category.category_name,
      category_icon: await this.httpService.axiosRef
        .get(product_category.category_icon)
        .then((response) => {
          return Buffer.from(response.data, 'binary');
        }),
    });
  }

  async update(
    category_id: number,
    product_category: product_category_dto,
  ): Promise<product_category> {
    await this.product_category_repository.update(
      {
        category_name: product_category.category_name,
        category_icon: await this.httpService.axiosRef
          .get(product_category.category_icon)
          .then((response) => {
            return Buffer.from(response.data, 'binary');
          }),
      },
      { where: { category_id } },
    );
    return this.product_category_repository.findOne({ where: { category_id } });
  }

  async delete(category_id: number): Promise<void> {
    await this.product_category_repository.destroy({ where: { category_id } });
  }
}
