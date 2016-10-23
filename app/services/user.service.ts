import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

// 导入rxjs的toPromise操作符
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    // 请求的头部信息
    private headers = new Headers({
       'Content-Type': 'application/json'
    });
    // 请求的查询参数
    private urlParams: URLSearchParams;
    // 请求的地址
    private usersUrl = 'http://jsonplaceholder.typicode.com/users';
    private postsUrl = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http){}

    getUsers() {
        this.urlParams = new URLSearchParams();
        this.urlParams.set('type', 'all');
        return this.http.get(this.usersUrl, {
            search: this.urlParams
        })
            .toPromise()
            .then(res => {
                console.log(res);
                return res.json()
            })
            .catch(this.errorHandle);
    }

    update(id, data) {
        this.urlParams = new URLSearchParams();
        this.urlParams.set('type', 'all');
        let updateUrl = this.postsUrl + '/' + id;
        return this.http.put(updateUrl, data, this.headers)
            .toPromise()
            .then(res => {
                console.log(res, res.json());
                return res.json();
            })
    }

    private errorHandle(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}