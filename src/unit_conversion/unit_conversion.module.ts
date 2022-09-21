import { Module } from '@nestjs/common';
import { databaseProviders } from '../database/database.service';
import { unit_conversion_controller } from './unit_conversion.controller';
import { unit_conversion_providers } from './unit_conversion.providers';
import { unit_conversion_service } from './unit_conversion.service';

@Module({
  imports: [],
  controllers: [unit_conversion_controller],
  providers: [
    unit_conversion_service,
    ...unit_conversion_providers,
    ...databaseProviders,
  ],
  exports: [unit_conversion_service],
})
export class unit_conversion_module {}
