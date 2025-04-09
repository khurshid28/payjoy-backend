import { NestFactory } from '@nestjs/core';
import { MerchantModule } from './merchant.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
      const app = await NestFactory.createMicroservice<MicroserviceOptions>(
            MerchantModule,
            {
              transport: Transport.RMQ,
              options: {
                urls: ['amqp://localhost:5672'],
                queue: 'merchant_queue',
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
