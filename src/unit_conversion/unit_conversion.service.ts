import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { unit_conversion } from './unit_conversion.entity';

@Injectable()
export class unit_conversion_service {
  constructor(
    @InjectRepository(unit_conversion)
    private unit_conversion_repository: Repository<unit_conversion>,
  ) {}
}