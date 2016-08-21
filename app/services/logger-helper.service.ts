import {Injectable} from '@angular/core';

@Injectable()
export class LoggerHelper {
    constructor() {
        console.warn('Just a logger helper!');
    }
}