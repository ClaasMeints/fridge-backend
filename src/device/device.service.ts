import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { device } from './device.entity';

@Injectable()
export class device_service {
  constructor(
    @InjectRepository(device)
    private device_repository: Repository<device>,
  ) {}
}