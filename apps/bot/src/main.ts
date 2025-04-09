import { NestFactory } from '@nestjs/core';
import { BotModule } from './bot.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {



  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      BotModule,
      {
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'bot_queue',
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
