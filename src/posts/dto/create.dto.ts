import { Field, InputType } from "@nestjs/graphql";
import { User } from "src/users/user.model";

@InputType()
export class PostCreateDto{
    @Field()
    title:string

    @Field()
    user_id:number

    // @Field(()=>User)
    // user:User
}