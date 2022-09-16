import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { required_content } from './required_content.entity';

@Injectable()
export class required_content_service {
  constructor(
    @InjectRepository(required_content)
    private required_content_repository: Repository<required_content>,
  ) {}
}