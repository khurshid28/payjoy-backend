import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './middlewares/error-handler';
import helmet from 'helmet';
// import { ErrorInterceptor } from './middlewares/error-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalInterceptors(new ErrorInterceptor());

  app.setGlobalPrefix('/api/v1');

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableCors({
    origin: '*',
  });
  // app.use(helmet());
  // app.use(morgan('dev'));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.APP_PORT);
}
bootstrap();
