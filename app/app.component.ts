import { Component } from '@angular/core';
// 导入OnInit
import {OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html'
})
export class AppComponent implements OnInit{

    private users = [];

    private articleData = {
        name: 'dreamapple',
        date: '2016-10-23'
    };

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.userService.getUsers()
            .then(res => {
                this.users = res;
            });
    }

    update(id, data) {
        this.userService.update(id, data)
            .then(res => {
                console.log(res, 'from component');
            })
    }
}
