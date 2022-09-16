import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { unit_controller } from './unit.controller';
import { unit_service } from './unit.service';
import { unit } from './unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([unit])],
  controllers: [unit_controller],
  providers: [unit_service],
  exports: [unit_service],
})
export class unit_module {}