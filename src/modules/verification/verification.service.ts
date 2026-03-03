import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SendOtpDto } from './dto/verification.dto';
import { RedisService } from 'src/redis/redis.service';
import { Http2ServerRequest } from 'http2';
import { SmsService } from '../service/sms.service';

@Injectable()
export class VerificationService {
    constructor(
        private readonly redisService:RedisService,
        private readonly smsService: SmsService
    ){}

    private getMessage(otp: number){
        return `Fixoo platformasidan ro'yxatdan o'tish uchun tasdiqlash kodi: ${otp}. Kodni hech kimga bermang!`
    }
    async sendOtp(payload: any) {

        const {phone} = payload
        let key = "req_" + phone
        const session = await this.redisService.get(key)

        if (session) {
            throw new HttpException("Otp already sent", HttpStatus.BAD_REQUEST)
        }

        const otp = Math.floor(100000 + Math.random() * 900000);
        await this.redisService.set(key, +otp)
        await this.smsService.sendSMS(this.getMessage(otp), phone)

        return{
            success: true,
            message: "Otp sent successfully"
        }
    }
}
