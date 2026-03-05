import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()

export class Post {
    @Field()
    title: string

    @Field()
    user_id: number
}
@ObjectType()
export class PostCreateRes {
    @Field()
    success: boolean

    @Field()
    message: string

}