import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product_class_controller } from './product_class.controller';
import { product_class_service } from './product_class.service';
import { product_class } from './product_class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([product_class])],
  controllers: [product_class_controller],
  providers: [product_class_service],
  exports: [product_class_service],
})
export class product_class_module {}