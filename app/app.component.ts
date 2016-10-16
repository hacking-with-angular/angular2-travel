import { Component } from '@angular/core';
import {ActiveTitleService} from "./components/title/active-title.service";
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.template.html'
})
export class AppComponent {
    appTitle = 'Hello title';
    constructor(activeTitleService: ActiveTitleService) {
        this.appTitle = activeTitleService.getTitle();
    }
}
