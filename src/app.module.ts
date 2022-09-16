import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { device_module } from '../src/device/device.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { fridge_user_module } from './fridge_user/fridge_user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'fridge_content',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    device_module,
    fridge_user_module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
