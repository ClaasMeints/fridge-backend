import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { required_content_controller } from './required_content.controller';
import { required_content_service } from './required_content.service';
import { required_content } from './required_content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([required_content])],
  controllers: [required_content_controller],
  providers: [required_content_service],
  exports: [required_content_service],
})
export class required_content_module {}