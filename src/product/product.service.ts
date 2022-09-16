import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product } from './product.entity';

@Injectable()
export class product_service {
  constructor(
    @InjectRepository(product)
    private product_repository: Repository<product>,
  ) {}
}