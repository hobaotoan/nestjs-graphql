import { GetUserByEmail } from './dto/args/get-useremail.args';
import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUserById } from "./dto/args/get-userid.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/user";


@Injectable()
export class UsersService {
    private users: User[] = [
    ];

    public createUser(createUserData: CreateUserInput): User {
        const user: User = {
            userId: uuidv4(),
            ...createUserData
        }

        this.users.push(user);

        return user;
    }
    public findAll(): User[] {
        return this.users
    }


    public updateUser(updateUserData: UpdateUserInput): User {
        const user = this.users.find(user => user.userId === updateUserData.userId);

        Object.assign(user, updateUserData);

        return user;
    }

    public getUser(getUserArgs: GetUserArgs): User {
        return this.users.find(user => user.email === getUserArgs.email && user.password === user.password);
    }
    public getUserById(getUserById: GetUserById): User {
        return this.users.find(user => user.userId === getUserById.userId);
    }

    // public getUserByEmail(getUserByEmail: GetUserByEmail): User | undefined {
    //     return this.users.find(user => user.email === getUserByEmail.email);
    // }

    public getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        return getUsersArgs.userIds.map(userId => this.getUserById({ userId }));
    }


    public deleteUser(deleteUserData: DeleteUserInput): User {
        const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId);

        const user = this.users[userIndex];

        this.users.splice(userIndex);

        return user;
    }
}