import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from "./search.component";
import {SearchService} from "./search.service";
// 导入Search Component


@NgModule({
    providers: [
        SearchService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        SearchComponent
    ],
    exports: [
        CommonModule,
        SearchComponent,
        FormsModule
    ]
})

export class SearchModule {}