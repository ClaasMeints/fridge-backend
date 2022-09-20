import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { required_content } from './required_content.entity';

@Injectable()
export class required_content_service {
  constructor(
    private required_content_repository: Repository<required_content>,
  ) {}
}
