import { Module } from '@nestjs/common';
import { fridge_user_device_relation_controller } from './fridge_user_device_relation.controller';
import { fridge_user_device_relation_service } from './fridge_user_device_relation.service';
import { product_module } from '../product/product.module';
import { fridge_user_module } from '../fridge_user/fridge_user.module';
import { fridge_user_device_relation_providers } from './fridge_user_device_relation.providers';
import { databaseProviders } from '../database/database.service';

@Module({
  imports: [product_module, fridge_user_module],
  controllers: [fridge_user_device_relation_controller],
  providers: [
    fridge_user_device_relation_service,
    ...fridge_user_device_relation_providers,
    ...databaseProviders,
  ],
  exports: [fridge_user_device_relation_service],
})
export class fridge_user_device_relation_module {}
