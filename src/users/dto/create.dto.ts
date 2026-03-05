import { Field, InputType } from "@nestjs/graphql";
import { Post } from "src/posts/posts.model";

@InputType()
export class UserCreateDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;

//   @Field(()=>[Post], {nullable:true})
//   posts:Post[]
}