import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { fridge_user_controller } from './fridge_user.controller';
import { fridge_user_service } from './fridge_user.service';
import { fridge_user } from './fridge_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([fridge_user])],
  controllers: [fridge_user_controller],
  providers: [fridge_user_service],
  exports: [fridge_user_service],
})
export class fridge_user_module {}