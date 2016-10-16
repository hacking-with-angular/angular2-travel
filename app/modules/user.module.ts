import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserListComponent} from "../components/user-list/user-list.component";
import {UserListService} from "../components/user-list/user-list.service";
import {HighlightDirective} from "../components/user-list/user-highlight.directive";

@NgModule({
    providers: [
        UserListService
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        UserListComponent,
        HighlightDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        UserListComponent
    ]
})

export class UserModule {}