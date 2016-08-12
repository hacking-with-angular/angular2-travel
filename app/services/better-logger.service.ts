import {Injectable} from '@angular/core';

@Injectable()
export class BetterLogger {
    logs: string[] = [];

    constructor() {
        console.log('[2] from BetterLogger ' + new Date().getMilliseconds());
    }

    log(message: string) {
        this.logs.push(message);
        console.log(message + ' from better logger!');
    }
}