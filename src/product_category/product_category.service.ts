import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product_category } from './product_category.entity';

@Injectable()
export class product_category_service {
  constructor(
    @InjectRepository(product_category)
    private product_category_repository: Repository<product_category>,
  ) {}
}