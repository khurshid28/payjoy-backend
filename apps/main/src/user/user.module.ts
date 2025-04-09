import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports :[
      ClientsModule.register([
            {
              name: 'USER_CLIENT',
              transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'user_queue',
          queueOptions: {
            durable: false
          },
        },
            },
          ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
