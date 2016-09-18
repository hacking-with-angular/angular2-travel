import {Injectable} from '@angular/core';

import {User} from '../classes/User';
import {USERS} from '../mock/user.data';

@Injectable()
export class UserService {
    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
    getUsersSlowly(): Promise<User[]> {
        return new Promise(resolve => setTimeout(resolve, 2000)).then(() => this.getUsers());
    }
}

