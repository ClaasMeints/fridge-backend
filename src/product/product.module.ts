import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product_controller } from './product.controller';
import { product_service } from './product.service';
import { product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([product])],
  controllers: [product_controller],
  providers: [product_service],
  exports: [product_service],
})
export class product_module {}