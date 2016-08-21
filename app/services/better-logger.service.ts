import {Injectable} from '@angular/core';
import {LoggerHelper} from "./logger-helper.service";

@Injectable()
export class BetterLogger{
    logs: string[] = [];

    constructor(private loggerHelper: LoggerHelper) {
        console.warn('BetterLogger Constructor');
    }

    log(msg) {
        this.logs.push(msg);
        console.warn('From better logger class: ' + msg);
    }
}