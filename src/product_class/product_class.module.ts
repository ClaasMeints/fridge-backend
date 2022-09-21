import { Module } from '@nestjs/common';
import { product_class_controller } from './product_class.controller';
import { product_class_service } from './product_class.service';
import { unit_module } from '../unit/unit.module';
import { product_category_module } from '../product_category/product_category.module';
import { product_class_providers } from './product_class.providers';
import { databaseProviders } from '../database/database.service';

@Module({
  imports: [unit_module, product_category_module],
  controllers: [product_class_controller],
  providers: [
    product_class_service,
    ...product_class_providers,
    ...databaseProviders,
  ],
  exports: [product_class_service],
})
export class product_class_module {}
