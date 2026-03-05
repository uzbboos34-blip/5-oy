import { Field, ObjectType } from "@nestjs/graphql";
import { Post } from "src/posts/posts.model";


@ObjectType()

export class User{
    @Field()
    id:number

    @Field()
    name:string

    @Field()
    email:string

    @Field()
    age:number

    @Field(()=>[Post], {nullable:true})
    posts:Post[]
}
@ObjectType()
export class UserCreateRes {
    @Field()
    success: boolean

    @Field()
    message: string

}