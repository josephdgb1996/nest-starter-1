import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Env } from '@config/env';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(Env.apiPrefix());
  await app.listen(Env.port());
}

bootstrap();
