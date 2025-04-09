import { NestFactory } from '@nestjs/core';
import { StatisticModule } from './statistic.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
             StatisticModule,
             {
               transport: Transport.RMQ,
               options: {
                 urls: ['amqp://localhost:5672'],
                 queue: 'statistic_queue',
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
