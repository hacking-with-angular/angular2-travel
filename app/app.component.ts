import {Component} from '@angular/core';
// 引入我们要使用的类
import {Hero} from './hero';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/basics-app-template.html'
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {
    //title = 'Tour of heros';
    //myHero = 'dreamapple';

    title: string; // 默认为共有
    myHero: string;
    heros: Hero[]; // 数组的元素类型为Hero

    constructor() {
        this.title = 'Tour of heros';
        //noinspection TypeScriptValidateTypes
        this.heros = [
            new Hero(1, 'dream'),
            new Hero(2, 'apple'),
            new Hero(3, 'happy'),
            new Hero(4, 'dreamapple')
        ];
        //noinspection TypeScriptUnresolvedVariable
        this.myHero = this.heros[0].name;
    }

    /* 下面部分的代码是关于用户输入的 */
    msg = 'World';
    value = '';
    valueOfKeyEvent = '';
    yourName = '';
    value1 = '';
    value2 = '';

    showHello() {
        alert('Hello, ' + this.msg);
    }
    // 没有使用强类型
    captureKeyUp(e: any) {
        this.value = e.target.value;
    }
    // 使用强类型
    captureKeyEvent(e: KeyboardEvent) {
        this.valueOfKeyEvent = (<HTMLInputElement>event.target).value;
    }
    // 使用模板变量
    getUserName(value: string) {
        this.yourName = value;
    }

    item = '';
    itemList = [];

    addItem(name) {
        this.itemList.push({name: name, status: 'not complete'});
    }
    removeItem(id) {
        this.itemList.splice(id, 1);
    }
    doneItem(id) {
        this.itemList[id].status = 'done!';
    }
}