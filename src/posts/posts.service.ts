import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';
import { PostCreateDto } from './dto/create.dto';
import { PostUpdateDto } from './dto/update.dto';

@Injectable()
export class PostsService {
    constructor(private readonly prisma: PrismaService){}

    async getPosts(){
        return await this.prisma.post.findMany({
            include: {
                user: true
            }
        })
    }

    async createPost(payload:PostCreateDto){
        await this.prisma.post.create({
            data: payload
        })

        return{
            success:true,
            message:"Post created"
        }
    }

    async updatePost(id: number, payload:PostUpdateDto){

        const post = await this.prisma.post.findUnique({
            where: {id}
        })

        if (!post) {
            throw new NotFoundException("Post not found")
        }

        await this.prisma.post.update({
            where: {id},
            data: payload
        })

        return {
            success:true,
            message:"Post update successfully"
        }
    }

    async deletePost(id:number){
        const post = await this.prisma.post.delete({where: {id}})

        if (!post) {
            throw new NotFoundException("Post not found")
        }

        return {
            success:true,
            message:"Post delete successfully"
        }
    }
}
