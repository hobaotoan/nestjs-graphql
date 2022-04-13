import { ArgsType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@ArgsType()
export class GetUserByEmail {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string

}