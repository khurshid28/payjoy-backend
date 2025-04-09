import { NestFactory } from '@nestjs/core';
import { MyidModule } from './myid.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(
            MyidModule,
            {
              transport: Transport.RMQ,
              options: {
                urls: ['amqp://localhost:5672'],
                queue: 'myid_queue',
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
