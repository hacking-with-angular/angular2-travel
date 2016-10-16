import {Injectable} from '@angular/core';

@Injectable()
export class UserListService {
    fetchAllUsers() {
        return [
            {username: 'dreamapple1', id: 0},
            {username: 'dreamapple2', id: 1},
            {username: 'dreamapple3', id: 2}
        ];
    }
}