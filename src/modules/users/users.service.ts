import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class UsersService {
  constructor(private readonly redisService:RedisService){}
  async create(payload: any) {
    const otp = Math.floor(100000 + Math.random() * 900000);
    await this.redisService.set(payload.email, otp)

    return{
      success: true,
      message: "Otp sent successfully"
    }
  }

  async findAll(payload: any) {
    const otp = await this.redisService.get(payload.email)

    return{
      success: true,
      data: otp
    }
  }


  async remove(payload: any) {
    await this.redisService.del(payload.email)

    return{
      success: true,
      message: "Otp deleted successfully"
    }
  }
}
