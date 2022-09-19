import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product_class_controller } from './product_class.controller';
import { product_class_service } from './product_class.service';
import { product_class } from './product_class.entity';
import { unit_module } from '../unit/unit.module';
import { product_category_module } from '../product_category/product_category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([product_class]),
    unit_module,
    product_category_module,
  ],
  controllers: [product_class_controller],
  providers: [product_class_service],
  exports: [product_class_service],
})
export class product_class_module {}
