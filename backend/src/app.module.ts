import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsModule } from './products/products.module';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: 'postgres', //ajeitar depois
      synchronize: true,
      logging: false, 
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
