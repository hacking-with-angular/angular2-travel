import {Component, OnInit} from '@angular/core';
import {User} from "./classes/User";
import {UserService} from "./services/user.service";

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular2 Travel</h1>',
    templateUrl: 'app/templates/main.html',
    providers: [UserService]
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent implements OnInit{
    users: User[];

    constructor(
        private userService: UserService
    ){}

    getUsersData() {
        this.userService.getUsers()
            .then(users => this.users = users);
    }

    ngOnInit() {
        this.getUsersData();
    }

}