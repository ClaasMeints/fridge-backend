import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product_class } from './product_class.entity';

@Injectable()
export class product_class_service {
  constructor(
    @InjectRepository(product_class)
    private product_class_repository: Repository<product_class>,
  ) {}
}