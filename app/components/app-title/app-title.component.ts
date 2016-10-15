import {Component, Input} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    // 为什么要使用moduleId
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'app-title.component.html'
})

export class AppTitleComponent {
    @Input('sub-title') subTitle= '';
    title = 'Main title';
    userName = '';

    constructor(userService: UserService) {
        this.userName = userService.userName;
    }
}