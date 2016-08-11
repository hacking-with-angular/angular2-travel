import {Component} from '@angular/core';

// 使用User类
import {User} from './classes/User';
// 导入服务商
import {UserService} from './services/user.service';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-form',
    //template: '<h1>My First Angular2 Travel</h1>'
    templateUrl: 'app/templates/form.html',
    providers: [
        UserService
    ]
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class FormComponent {
    active: boolean = true;
    favoriteFruitList = ['apple', 'pear', 'banana', 'orange'];
    user = new User('dreamapple', '2451123321@qq.com', 'Nothing is impossible!', this.favoriteFruitList[0]);
    users: User[];

    constructor(userService: UserService) {
        // DI
        this.users = userService.getUsers()
    }

    get userInfo() {
        return JSON.stringify(this.user);
    }

    addUser() {
        this.active = false;
        this.user = new User('', '', '', '');
        setTimeout(() => this.active = true, 0);
    }

    submitForm() {
        alert(this.userInfo + '已经被提交!');
    }
}