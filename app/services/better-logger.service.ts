import {Injectable} from '@angular/core';

@Injectable()
export class BetterLogger {
    logs: string[] = [];

    log(message: string) {
        this.logs.push(message);
        console.log(message + ' from better logger!');
    }
}