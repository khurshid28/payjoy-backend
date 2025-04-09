import { NestFactory } from '@nestjs/core';
import { BankResultModule } from './bank_result.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        BankResultModule,
        {
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'bank_result_queue',
            queueOptions: {
              durable: false,
            },
          },
        },
      );
      app.useGlobalPipes(new ValidationPipe());
    
      app.listen();
}
bootstrap();
