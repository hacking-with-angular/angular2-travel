import {Injectable} from '@angular/core';

@Injectable()
export class Logger {
    logs: string[] = [];

    constructor() {
        console.log('[1] from Logger!');
    }

    log(message: string) {
        this.logs.push(message);
        console.log(message + 'from logger...');
    }
}