import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product_controller } from './product.controller';
import { product_service } from './product.service';
import { product } from './product.entity';
import { product_class_module } from '../product_class/product_class.module';

@Module({
  imports: [TypeOrmModule.forFeature([product]), product_class_module],
  controllers: [product_controller],
  providers: [product_service],
  exports: [product_service],
})
export class product_module {}
