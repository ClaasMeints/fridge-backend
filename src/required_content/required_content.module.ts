import { Module } from '@nestjs/common';
import { required_content_controller } from './required_content.controller';
import { required_content_providers } from './required_content.providers';
import { required_content_service } from './required_content.service';

@Module({
  imports: [],
  controllers: [required_content_controller],
  providers: [required_content_service, ...required_content_providers],
  exports: [required_content_service],
})
export class required_content_module {}
