import { ArgsType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@ArgsType()
export class GetUserById {
    @Field()
    @IsNotEmpty()
    userId: string

}