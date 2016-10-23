import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 导入我们需要的Http Module
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
// 导入我们需要的用户服务
import {UserService} from "./services/user.service";
import {SearchModule} from "./modules/search.module";
@NgModule({
    providers: [
        UserService
    ],
    imports:      [
        BrowserModule,
        HttpModule,
        SearchModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
