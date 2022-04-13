import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    userId: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field({ nullable: true })
    password?: string

    @Field()
    phone: string


}