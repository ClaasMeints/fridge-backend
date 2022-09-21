import { Module } from '@nestjs/common';
import { databaseProviders } from '../database/database.service';
import { unit_controller } from './unit.controller';
import { unit_providers } from './unit.providers';
import { unit_service } from './unit.service';

@Module({
  imports: [],
  controllers: [unit_controller],
  providers: [unit_service, ...unit_providers, ...databaseProviders],
  exports: [unit_service],
})
export class unit_module {}
