import {Injectable} from '@angular/core';

@Injectable()
export class Logger{
    logs: string[] = [];

    constructor() {
        console.warn('Logger Constructor');
    }
    log(msg) {
        this.logs.push(msg);
        console.warn('From logger class: ' + msg);
    }
}