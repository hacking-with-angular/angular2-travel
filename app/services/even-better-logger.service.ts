import {Injectable} from '@angular/core';
import {BetterLogger} from "./better-logger.service";
import {LoggerHelper} from "./logger-helper.service";

@Injectable()
export class EvenBetterLogger extends BetterLogger{
    //logs: string[] = [];

    constructor(private loggerHelper: LoggerHelper) {
        console.log('[3] from EventBetterLogger!');
        super();
        this.loggerHelper.increment();
    }

    log(message: string) {
        this.logs.push(message);
        console.log(message + ' from even better logger!');
    }
}