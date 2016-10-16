import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TitleComponent} from "./components/title/title.component";
import {ActiveTitleService} from "./components/title/active-title.service";
import {HighlightDirective} from "./components/title/highlight.directive";
import {UserModule} from "./modules/user.module";
@NgModule({
    providers: [
        ActiveTitleService
    ],
    imports:      [
        BrowserModule,
        UserModule
    ],
    declarations: [
        AppComponent,
        TitleComponent,
        HighlightDirective
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
