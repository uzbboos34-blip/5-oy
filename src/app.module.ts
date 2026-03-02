import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [UsersModule, RedisModule]
})
export class AppModule {}
