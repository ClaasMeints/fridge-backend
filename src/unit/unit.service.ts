import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { unit } from './unit.entity';

@Injectable()
export class unit_service {
  constructor(
    @InjectRepository(unit)
    private unit_repository: Repository<unit>,
  ) {}
}