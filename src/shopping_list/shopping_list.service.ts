import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { shopping_list } from './shopping_list.entity';

@Injectable()
export class shopping_list_service {
  constructor(
    @InjectRepository(shopping_list)
    private shopping_list_repository: Repository<shopping_list>,
  ) {}
}