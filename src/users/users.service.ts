import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';
import { UserCreateDto } from './dto/create.dto';
import { UserUpdateDto } from './dto/update.dto';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService){}

    async getUsers(){
        return await this.prisma.user.findMany();
    }

    async create(payload: UserCreateDto){
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

    async update(id:number, payload: UserUpdateDto){
        const user = await this.prisma.user.findUnique({where: {id}})

        if (!user) {
            throw new NotFoundException("User not found")
        }

        await this.prisma.user.update({
            where: {id},
            data: payload
        })

        return{
            success:true,
            message:"User update successfully"
        }
    }

    async deleteUser(id:number){
        const user = await this.prisma.user.delete({where:{id}})

        if (!user) {
            throw new NotFoundException("User not found")
        }

        return{
            success:true,
            message:"User delete successfully"
        }
    }

}
