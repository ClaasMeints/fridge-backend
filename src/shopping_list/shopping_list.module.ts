import { Module } from '@nestjs/common';
import { shopping_list_controller } from './shopping_list.controller';
import { shopping_list_providers } from './shopping_list.providers';
import { shopping_list_service } from './shopping_list.service';

@Module({
  imports: [],
  controllers: [shopping_list_controller],
  providers: [shopping_list_service, ...shopping_list_providers],
  exports: [shopping_list_service],
})
export class shopping_list_module {}
