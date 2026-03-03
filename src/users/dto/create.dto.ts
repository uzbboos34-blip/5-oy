import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}