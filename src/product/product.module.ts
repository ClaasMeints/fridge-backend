import { Module } from '@nestjs/common';
import { product_service } from './product.service';
import { product_class_module } from '../product_class/product_class.module';
import { product_providers } from './product.providers';
import { databaseProviders } from '../database/database.service';

@Module({
  imports: [product_class_module],
  providers: [product_service, ...product_providers, ...databaseProviders],
  exports: [product_service],
})
export class product_module {}
