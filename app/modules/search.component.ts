import { Component, OnInit } from '@angular/core';
import {SearchService} from "./search.service";
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {User} from './User.class';
import "rxjs/Rx";

@Component({
    selector: 'search',
    templateUrl: 'app/modules/search.template.html'
})

export class SearchComponent implements OnInit {
    users: Observable<User[]>;
    private searchTerms = new Subject<string>();
    githubUser = 'dreamapplehappy';
    constructor(private searchService: SearchService) {}

    search(): void {
        this.searchTerms.next(this.githubUser);
        console.log(this.githubUser);
    }

    ngOnInit() {
        // TODO
        this.users = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => {
                return term   // switch to new observable each time
                    // return the http search observable
                    ? this.searchService.followersSearch(term)
                    // or the observable of empty heroes if no search term
                    : Observable.of<User[]>([])
            })
            .catch(error => {
                // TODO: real error handling
                console.error(error);
                return Observable.of<User[]>([]);
            });
    }
}