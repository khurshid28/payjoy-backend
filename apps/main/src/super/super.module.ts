import { Module } from '@nestjs/common';
import { SuperService } from './super.service';
import { SuperController } from './super.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
   imports: [
      ClientsModule.register([
        {
          name: 'SUPER_CLIENT',
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'super_queue',
            queueOptions: {
              durable: false
            },
          },
        },
      ]),
    ],
  controllers: [SuperController],
  providers: [SuperService],
})
export class SuperModule {}
