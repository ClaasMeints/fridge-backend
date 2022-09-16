import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { shopping_list_controller } from './shopping_list.controller';
import { shopping_list_service } from './shopping_list.service';
import { shopping_list } from './shopping_list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([shopping_list])],
  controllers: [shopping_list_controller],
  providers: [shopping_list_service],
  exports: [shopping_list_service],
})
export class shopping_list_module {}