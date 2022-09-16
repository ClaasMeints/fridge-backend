import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { fridge_user_module } from './fridge_user/fridge_user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), fridge_user_module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
