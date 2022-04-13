import { GetUserByEmail } from './dto/args/get-useremail.args';
import { UseGuards } from "@nestjs/common";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CurrentUser } from "../auth/current-user.decorator";
import { GqlAuthGuard } from "../auth/guards/gql-auth.guard";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/user";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}


    @Query(() => User, { name: 'login', nullable: true })
    @UseGuards(GqlAuthGuard)
    getUser(@CurrentUser() user: User,  @Args() getUserArgs: GetUserArgs): User {
        return this.usersService.getUser(getUserArgs);
    }

    @Query(() => User, { name: 'getUserByEmail', nullable: true })
    getUserByEmail( @Args('email') email: string): User {
        return this.usersService.getUserByEmail(email);
    }

    @Query(() => [User], { name: 'users', nullable: 'items' })
    getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
        return this.usersService.getUsers(getUsersArgs);
    }

    @Query(() => [User], { name: 'usersnon', nullable: 'items' })
    getUsersNon(): User[] {
        return this.usersService.findAll();
    }


    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): User {
        return this.usersService.createUser(createUserData);
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
        return this.usersService.updateUser(updateUserData);
    }

    @Mutation(() => User)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
        return this.usersService.deleteUser(deleteUserData);
    }
}