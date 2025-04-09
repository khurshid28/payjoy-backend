import { Module } from '@nestjs/common';
import { MyidController } from './myid.controller';
import { MyidService } from './myid.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MYID_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'myid_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [MyidController],
  providers: [MyidService],
})
export class MyidModule {}
