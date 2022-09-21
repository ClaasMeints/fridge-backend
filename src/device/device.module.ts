import { Module } from '@nestjs/common';
import { device_controller } from './device.controller';
import { device_service } from './device.service';
import { fridge_user_device_relation_module } from '../fridge_user_device_relation/fridge_user_device_relation.module';
import { device_providers } from './device.providers';
import { databaseProviders } from '../database/database.service';

@Module({
  imports: [fridge_user_device_relation_module],
  controllers: [device_controller],
  providers: [device_service, ...device_providers, ...databaseProviders],
  exports: [device_service],
})
export class device_module {}
