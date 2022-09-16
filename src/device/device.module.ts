import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { device_controller } from './device.controller';
import { device_service } from './device.service';
import { device } from './device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([device])],
  controllers: [device_controller],
  providers: [device_service],
  exports: [device_service],
})
export class device_module {}