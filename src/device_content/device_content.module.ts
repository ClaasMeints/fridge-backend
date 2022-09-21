import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { device_content_controller } from './device_content.controller';
import { device_content_service } from './device_content.service';
import { device_content } from './device_content.entity';
import { product_module } from '../product/product.module';
import { fridge_user_device_relation_module } from '../fridge_user_device_relation/fridge_user_device_relation.module';
import { device_module } from '../device/device.module';
import { device_content_providers } from './device_content:providers';
import { databaseProviders } from '../database/database.service';

@Module({
  imports: [product_module, fridge_user_device_relation_module, device_module],
  controllers: [device_content_controller],
  providers: [
    device_content_service,
    ...device_content_providers,
    ...databaseProviders,
  ],
  exports: [device_content_service],
})
export class device_content_module {}
