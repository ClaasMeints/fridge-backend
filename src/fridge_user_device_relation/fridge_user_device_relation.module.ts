import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { fridge_user_device_relation_controller } from './fridge_user_device_relation.controller';
import { fridge_user_device_relation_service } from './fridge_user_device_relation.service';
import { fridge_user_device_relation } from './fridge_user_device_relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([fridge_user_device_relation])],
  controllers: [fridge_user_device_relation_controller],
  providers: [fridge_user_device_relation_service],
  exports: [fridge_user_device_relation_service],
})
export class fridge_user_device_relation_module {}