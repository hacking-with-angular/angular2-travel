import {Component} from '@angular/core';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    //templateUrl: 'app/components/app-nav/app-nav.component.html'
    template: `
        <h1 >My First Angular2 Travel{{subTitle}}</h1>
        <app-title [sub-title]="subTitle"></app-title>
        <nav>
            <a routerLink="contact" routerLinkActive="active">Contact</a>
            <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
            <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {
    subTitle = '(v1)';
}