import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, UserCreateRes } from './user.model';
import { UserCreateDto } from './dto/create.dto';
import { UserUpdateDto } from './dto/update.dto';

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UsersService){}

    @Query(() => [User])
    getUsers(){
        return this.userService.getUsers();
    }

    @Mutation(() => UserCreateRes)
    createUser(@Args("payload") payload: UserCreateDto){
        return this.userService.create(payload);
    }

    @Mutation(() => UserCreateRes)
    updateUser(
        @Args("id") id: number,
        @Args("payload") payload: UserUpdateDto
    ){
        return this.userService.update(id, payload);
    }

    @Mutation(() => UserCreateRes)
    deleteUser(@Args("id") id: number){
        return this.userService.deleteUser(id);
    }
}
