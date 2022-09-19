import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product_category_controller } from './product_category.controller';
import { product_category_service } from './product_category.service';
import { product_category } from './product_category.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([product_category]), HttpModule],
  controllers: [product_category_controller],
  providers: [product_category_service],
  exports: [product_category_service],
})
export class product_category_module {}
