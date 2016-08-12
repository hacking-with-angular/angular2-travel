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
      //UserService, // 直接使用服务
      //  Logger
      //  BetterLogger,
      //  {provide: Logger, useClass: BetterLogger} // 只能使用Logger
      //[LoggerHelper, {provide: Logger, useClass: EvenBetterLogger}], // 添加依赖的使用
      //[BetterLogger,{provide: Logger, useExisting: BetterLogger}] // 别名
      {provide: BetterLogger, useClass: BetterLogger}, // 别名
      [BetterLogger, {provide: Logger, useExisting: BetterLogger}] // 别名 使用useExisting避免创建了两个实例
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