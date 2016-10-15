import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './components/app-nav/app-nav.component';
import {HighlightDirective} from "./directives/highlight.directive";
import {AppTitleComponent} from "./components/app-title/app-title.component";
import {UserService} from "./services/user.service";
// contact module
import {ContactModule} from './components/contact/contact.module';
import {routing} from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        ContactModule,
        routing
    ],
    declarations: [
        // components
        AppComponent,
        AppTitleComponent,
        // directives
        HighlightDirective
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}