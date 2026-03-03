import { Module } from '@nestjs/common';
import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';
import { RedisService } from 'src/redis/redis.service';
import { SmsService } from '../service/sms.service';

@Module({
  controllers: [VerificationController],
  providers: [VerificationService, RedisService, SmsService]
})
export class VerificationModule {}
