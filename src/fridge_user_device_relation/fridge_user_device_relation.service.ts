import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { fridge_user_device_relation } from './fridge_user_device_relation.entity';

@Injectable()
export class fridge_user_device_relation_service {
  constructor(
    @InjectRepository(fridge_user_device_relation)
    private fridge_user_device_relation_repository: Repository<fridge_user_device_relation>,
  ) {}
}