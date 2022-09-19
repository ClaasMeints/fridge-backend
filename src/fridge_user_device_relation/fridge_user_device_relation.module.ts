import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { fridge_user_device_relation_controller } from './fridge_user_device_relation.controller';
import { fridge_user_device_relation_service } from './fridge_user_device_relation.service';
import { fridge_user_device_relation } from './fridge_user_device_relation.entity';
import { product_module } from '../product/product.module';
import { fridge_user_module } from '../fridge_user/fridge_user.module';
import { device_module } from '../device/device.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([fridge_user_device_relation]),
    device_module,
    product_module,
    fridge_user_module,
  ],
  controllers: [fridge_user_device_relation_controller],
  providers: [fridge_user_device_relation_service],
  exports: [fridge_user_device_relation_service],
})
export class fridge_user_device_relation_module {}
