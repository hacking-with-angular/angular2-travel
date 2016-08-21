import {Injectable} from '@angular/core';

@Injectable()
export class Authorize {
    isAuthorized: boolean;
    constructor(){
        this.isAuthorized = Math.random() > 0.5 ? true: false;
    }
    getIsAuthorized() {
        return this.isAuthorized;
    }
}