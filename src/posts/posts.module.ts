import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PrismaModule } from 'src/core/database/prisma.model';
import { PostsService } from './posts.service';

@Module({
  imports: [PrismaModule],
  providers: [PostsResolver, PostsService],
  exports: [PostsService],
})
export class PostsModule {}
