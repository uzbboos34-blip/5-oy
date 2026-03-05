import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post, PostCreateRes } from './posts.model';
import { PostCreateDto } from './dto/create.dto';
import { PostUpdateDto } from './dto/update.dto';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
    constructor(private readonly postService: PostsService){}

    @Query(() => [Post])

    getPosts(){
        return this.postService.getPosts()
    }

    @Mutation(() => PostCreateRes)
    createPost(@Args("payload") payload:PostCreateDto){
        return this.postService.createPost(payload)
    }

    updatePost(@Args("id") id:number, @Args("payload") payload:PostUpdateDto){
        return this.postService.updatePost(id, payload)
    }
    
    deletePost(@Args("id") id:number){
        return this.postService.deletePost(id)
    }

}
