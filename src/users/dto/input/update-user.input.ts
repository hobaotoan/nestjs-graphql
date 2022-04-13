import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;

    @Field()
    @IsOptional()
    @IsNotEmpty()
    phone:string

    @Field()
    @IsOptional()
    password:string

    @Field()
    @IsOptional()
    username:string


}