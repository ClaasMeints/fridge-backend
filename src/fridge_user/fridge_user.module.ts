import { Module } from '@nestjs/common';
import { databaseProviders } from '../database/database.service';
import { fridge_user_controller } from './fridge_user.controller';
import { fridge_user_providers } from './fridge_user.providers';
import { fridge_user_service } from './fridge_user.service';

@Module({
  controllers: [fridge_user_controller],
  providers: [
    fridge_user_service,
    ...fridge_user_providers,
    ...databaseProviders,
  ],
  exports: [fridge_user_service],
})
export class fridge_user_module {}
