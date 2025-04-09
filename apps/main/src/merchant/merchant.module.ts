import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MERCHANT_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'merchant_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [MerchantController],
  providers: [MerchantService],
})
export class MerchantModule {}
