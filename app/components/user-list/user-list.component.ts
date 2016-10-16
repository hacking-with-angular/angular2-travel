import {Component, OnInit} from '@angular/core';
import {UserListService} from "./user-list.service";
import {User} from "./user.class";

@Component({
    selector: 'user-list',
    templateUrl: 'app/components/user-list/user-list.template.html'
})
export class UserListComponent implements OnInit {
    username: string;
    users: User[];

    constructor(private userListService: UserListService) {
    }

    addNewUser() {
        let user = new User(this.username, this.users.length);
        this.users.push(user);
    }
    ngOnInit() {
        this.users = this.userListService.fetchAllUsers();
    }
}