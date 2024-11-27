import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from 'src/config/envs';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from 'src/common/exceptions/rpc-custom-exception.filter';

async function bootstrap() {
  const logger = new Logger('Main-Gateway');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new RpcCustomExceptionFilter());

  await app.listen(envs.PORT);

  logger.log(`Gateway is running on port ${envs.PORT}`);
}
bootstrap();
