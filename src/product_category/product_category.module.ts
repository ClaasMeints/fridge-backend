import { Module } from '@nestjs/common';
import { product_category_controller } from './product_category.controller';
import { product_category_service } from './product_category.service';
import { HttpModule } from '@nestjs/axios';
import { product_category_providers } from './product_category.provicers';
import { databaseProviders } from '../database/database.service';

@Module({
  imports: [HttpModule],
  controllers: [product_category_controller],
  providers: [
    product_category_service,
    ...product_category_providers,
    ...databaseProviders,
  ],
  exports: [product_category_service],
})
export class product_category_module {}
