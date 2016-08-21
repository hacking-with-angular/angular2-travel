import {Injectable, Optional} from '@angular/core';
import {Users} from "../mock/user-data.mock";
import {Logger} from "./logger.service";
import {BetterLogger} from "./better-logger.service";


@Injectable()
export class UserService {
    constructor(private logger: Logger,
                @Optional()private betterLogger: BetterLogger) {
    }

    getUsers() {
        this.logger.log('get users');
        //noinspection TypeScriptUnresolvedFunction
        this.logger.hello();

        if(this.betterLogger) {
            this.betterLogger.log('optional');
        }

        //console.log(this.logger);
        return Users;
    }
}