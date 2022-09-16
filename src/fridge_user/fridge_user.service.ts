import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { fridge_user } from './fridge_user.entity';

@Injectable()
export class fridge_user_service {
  constructor(
    @InjectRepository(fridge_user)
    private fridge_user_repository: Repository<fridge_user>,
  ) {}
}