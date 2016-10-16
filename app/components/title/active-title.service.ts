import {Injectable} from '@angular/core';

@Injectable()
export class ActiveTitleService {
    getTitle() {
        let title = Math.random().toFixed(2) + 'title';
        return title;
    }
}