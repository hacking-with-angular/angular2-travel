import {Component} from '@angular/core';

// 使用User类
import {User} from './classes/User';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular2 Travel</h1>'
    templateUrl: 'app/templates/form.html'
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {
    favoriteFruitList = ['apple', 'pear', 'banana', 'orange'];
    user = new User('dreamapple', '2451123321@qq.com', 'Nothing is impossible!', this.favoriteFruitList[0]);

    get userInfo() {
        return JSON.stringify(this.user);
    }

    addUser() {
        this.user = new User('', '', '');
    }
}