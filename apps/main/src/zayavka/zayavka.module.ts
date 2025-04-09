import { Module } from '@nestjs/common';
import { ZayavkaController } from './zayavka.controller';
import { ZayavkaService } from './zayavka.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ZAYAVKA_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'zayavka_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),

    ClientsModule.register([
      {
        name: 'BOT_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'bot_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [ZayavkaController],
  providers: [ZayavkaService],
})
export class ZayavkaModule {}
