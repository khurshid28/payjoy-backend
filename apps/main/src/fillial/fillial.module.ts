import { Module } from '@nestjs/common';
import { FillialService } from './fillial.service';
import { FillialController } from './fillial.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
      ClientsModule.register([
        {
          name: 'FILLIAL_CLIENT',
          transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'fillial_queue',
          queueOptions: {
            durable: false
          },
        },
        },
      ]),
    ],
  controllers: [FillialController],
  providers: [FillialService],
})
export class FillialModule {}
