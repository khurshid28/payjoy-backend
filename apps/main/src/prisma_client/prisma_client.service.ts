import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigSource } from '@nestjs/microservices/external/kafka.interface';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaClientService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
 
  async onModuleInit() {
    await this.$connect();
    console.log('PrismaClientService connected in main app');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('PrismaClientService disconnected in main app');
  }
}
