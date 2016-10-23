import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User} from "./User.class";
//import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

    private headers = new Headers({
        'Content-Type': 'application/json'
    });


    constructor(private http: Http) {}

    followersSearch(username): Observable<User[]> {
        let githubUrl = 'https://api.github.com/users/'+ username +'/followers';
        return this.http.get(githubUrl, this.headers)
            .map((res: Response) => {
                return res.json() as User[];
            })
    }
}