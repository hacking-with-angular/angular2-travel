import {Component} from '@angular/core';
import {FormComponent} from './form.component';
import {Logger} from "./services/logger.service";
import {BetterLogger} from "./services/better-logger.service";
import {EvenBetterLogger} from "./services/even-better-logger.service";
import {LoggerHelper} from "./services/logger-helper.service";
import {UserService} from "./services/user.service";

//import {UserService} from './services/user.service';

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    providers: [
      //UserService,
      //  Logger
      //  {provide: Logger, useClass: BetterLogger}
      [LoggerHelper, {provide: Logger, useClass: EvenBetterLogger}]
    ],
    directives: [
        FormComponent
    ]
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {}