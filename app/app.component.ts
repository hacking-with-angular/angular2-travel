import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/online-user.service";
import {User} from "./classes/User";

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular2 Travel</h1>',
    templateUrl: 'app/templates/main.html',
    providers: [
        UserService
    ]
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent implements OnInit{
    users: User[];
    constructor(
        private userService: UserService
    ) {}
    ngOnInit(): void {
        this.getOnlineUser();
    }
    getOnlineUser(): void {
        this.userService.getUsersSlowly().then(
            users => this.users = users
        );
    }
}