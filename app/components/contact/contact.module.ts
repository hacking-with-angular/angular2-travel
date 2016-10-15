/**
 * Created by dreamapple on 16/9/25.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AwesomePipe} from './awesome.pipe';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {HighlightDirective} from './highlight.directive';
import {routing} from "./contact.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        ContactComponent,
        HighlightDirective,
        AwesomePipe
    ],
    exports: [
        ContactComponent
    ],
    providers: [
        ContactService
    ]
})

export class ContactModule {}