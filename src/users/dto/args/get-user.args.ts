import { ArgsType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@ArgsType()
export class GetUserArgs {
    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    password: string;
}