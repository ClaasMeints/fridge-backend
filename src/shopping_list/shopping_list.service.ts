import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { shopping_list } from './shopping_list.entity';

@Injectable()
export class shopping_list_service {
  constructor() {}
}
