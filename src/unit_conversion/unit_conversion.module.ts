import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { unit_conversion_controller } from './unit_conversion.controller';
import { unit_conversion_service } from './unit_conversion.service';
import { unit_conversion } from './unit_conversion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([unit_conversion])],
  controllers: [unit_conversion_controller],
  providers: [unit_conversion_service],
  exports: [unit_conversion_service],
})
export class unit_conversion_module {}