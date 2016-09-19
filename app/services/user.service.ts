import {User} from "../classes/User";
import {USERS} from "../mock/user.data";

export class UserService {
    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
    getMockUsers(): Promise<User[]> {
        return new Promise(resolve => setTimeout(resolve(USERS), 2000))
            .then(() => this.getUsers());
    }
}