import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RESULT_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'result_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  providers: [ResultService],
  controllers: [ResultController],
})
export class ResultModule {}
