import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()

export class User{
    @Field()
    name:string

    @Field()
    email:string

    @Field()
    age:number
}
@ObjectType()
export class CreateRes{
    @Field()
    success : boolean
    
    @Field()
    message:string

}