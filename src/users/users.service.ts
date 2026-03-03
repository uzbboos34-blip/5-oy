import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';
import { CreateDto } from './dto/create.dto';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService){}

    async getUsers(){
        return await this.prisma.user.findMany();
    }

    async create(payload: CreateDto){
        await this.prisma.user.create({ 
            data: {
                name: payload.name,
                email: payload.email,
                age: payload.age
            }
        })

        return {
            success: true,
            message: 'User created successfully'
        }
    }

}
