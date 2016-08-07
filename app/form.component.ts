import {Component} from '@angular/core';
import {User} from './classes/User';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'user-form',
    templateUrl: 'app/templates/form.html'
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class UserFormComponent {
    active = true;
    favoriteList = ['apple', 'pear', 'banana', 'orange'];
    user = new User('dreamapple', '2451731631@qq.com', 'Nothing is impossible', this.favoriteList[0]);

    // 整个模型的的信息
    get userModelInfo() {
        return JSON.stringify(this.user);
    }

    addUser() {
        this.user = new User('', 'angular@163.com', 'Everything is possible');
        this.active = false;
        setTimeout(()=> this.active = true, 0);
    }

    onSubmit() {
        alert('表单已经被提交!');
    }
}