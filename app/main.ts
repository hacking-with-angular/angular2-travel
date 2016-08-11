import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {AppComponent} from './app.component';
//noinspection TypeScriptValidateTypes
//bootstrap(AppComponent);

//import {AppComponent} from './app.component';
//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
])
.catch((err: any) => console.error(err));