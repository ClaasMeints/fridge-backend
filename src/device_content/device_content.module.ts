import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { device_content_controller } from './device_content.controller';
import { device_content_service } from './device_content.service';
import { device_content } from './device_content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([device_content])],
  controllers: [device_content_controller],
  providers: [device_content_service],
  exports: [device_content_service],
})
export class device_content_module {}