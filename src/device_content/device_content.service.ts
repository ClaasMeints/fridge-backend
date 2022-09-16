import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { device_content } from './device_content.entity';

@Injectable()
export class device_content_service {
  constructor(
    @InjectRepository(device_content)
    private device_content_repository: Repository<device_content>,
  ) {}
}