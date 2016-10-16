import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-title',
    templateUrl: 'app/components/title/title.template.html'
})

export class TitleComponent {
    @Input() appTitle = '';
}