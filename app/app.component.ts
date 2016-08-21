import {Component, Injector, OpaqueToken, Inject} from '@angular/core';
//import {OpaqueToken} from '@angular/core';

import {UserService} from "./services/user.service";
import {User} from "./classes/User";
import {Logger} from "./services/logger.service";
import {BetterLogger} from "./services/better-logger.service";
import {LoggerHelper} from "./services/logger-helper.service";
import {UseValue} from "./services/use-value.service";
import {loggerValue} from './values/logger.value';
import {loggerValue1} from "./values/logger.value";
import {Authorize} from "./services/authorize";
import {UserService2} from "./services/user-service2";
import {AppConfig} from "./config/app-config";
import {AppConf} from "./config/app-config";
 //let LoggerV = new OpaqueToken(loggerValue);

let APP_CONFIG = new OpaqueToken('./config/app-config');

let UserService2Provider = (logger: Logger, authorize: Authorize) => {
    return new UserService2(logger, authorize.getIsAuthorized());
};

/*
 * 别忘记了使用@前缀
 * 这里相当于组件视图
 */
@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular2 Travel</h1>',
    templateUrl: 'app/templates/app.html',
    providers: [
        //Logger,
        //[{provide: Logger, useClass: BetterLogger}],
        [LoggerHelper, {provide: BetterLogger, useClass: BetterLogger}],
        //[LoggerHelper, {provide: Logger, useClass: BetterLogger}],
        {provide: Logger, useValue: loggerValue},
        //{provide: Logger, useValue: loggerValue1},
        UserService,
        Authorize,
        {
            provide: UserService2,
            useFactory: UserService2Provider,
            deps: [Logger, Authorize]
        },
        {provide: APP_CONFIG, useValue: AppConf}
    ]
})

/*
 * 导出这个组件,也就是一个类
 * 这里相当于组件控制器
 */
export class AppComponent {
    users: User[];
    //private userService2: UserService2;
    constructor(private userService: UserService, private userService2: UserService2, @Inject(APP_CONFIG) AppConf: AppConfig) {
        this.users = userService.getUsers();

        console.log(this.userService2.getUsers());

        console.log(AppConf);
    }

    //constructor(private userService: UserService, private injector: Injector) {
    //    this.users = userService.getUsers();
    //    this.userService2 = this.injector.get(UserService2);
    //    console.log(this.userService2.getUsers());
    //}
}