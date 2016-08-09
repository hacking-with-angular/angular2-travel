import {Component} from '@angular/core';
import {FormComponent} from './form.component';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [
        FormComponent
    ]
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {}