import {bootstrap} from '@angular/platform-browser-dynamic';
// 引入表单需要的模块,同时使用disableDeprecatedForms模块来禁用老的表单API,并且消除一些警告信息
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {AppComponent} from './app.component';

// 添加依赖,同事捕捉错误
//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
])
// 捕捉错误
.catch((err: any) => console.error(err));