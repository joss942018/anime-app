import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  // Node: Unnecessary layer for working with NestJS/GraphQL ❌
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  await app.listen(3001);
}
bootstrap();
