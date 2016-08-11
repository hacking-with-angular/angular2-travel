import {Injectable} from '@angular/core';

@Injectable()
export class LoggerHelper {
    count: number = 0;

    increment() {
        this.count++;
        console.log(this.count);
    }
}