import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateRes, User } from './user.model';
import { CreateDto } from './dto/create.dto';

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UsersService){}

    @Query(() => [User])
    getUsers(){
        return this.userService.getUsers();
    }

    @Mutation(() => CreateRes)
    createUser(@Args("payload") payload: CreateDto){
        return this.userService.create(payload);
    }
}
