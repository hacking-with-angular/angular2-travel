import {Component} from '@angular/core';
// 引入我们要使用的类
import {Hero} from './hero';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is: {{myHero}}</h2>
        <p>Heros:</p>
        <ul>
            <li *ngFor="let hero of heros">
                {{hero.name}}
            </li>
        </ul>
        <p *ngIf="heros.length > 3">There are many heros!</p>
        `
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {
    //title = 'Tour of heros';
    //myHero = 'dreamapple';

    title: String; // 默认为共有
    myHero: String;
    heros: String[];

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
}