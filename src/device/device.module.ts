import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { device_controller } from './device.controller';
import { device_service } from './device.service';
import { device } from './device.entity';
import { fridge_user_device_relation_module } from '../fridge_user_device_relation/fridge_user_device_relation.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([device]),
    fridge_user_device_relation_module,
  ],
  controllers: [device_controller],
  providers: [device_service],
  exports: [device_service],
})
export class device_module {}
