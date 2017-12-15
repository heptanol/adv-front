import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable()
export class UserRepositoryService {

    constructor(private http: HttpClient) {}

    getList() {
        const url = AppConfig.URL.GET_USER.replace('{username}', '');
        return this.http.get<any>(url);
    }

    get(username) {
        const url = AppConfig.URL.GET_USER.replace('{username}', username);
        return this.http.get<any>(url);
    }

    getNodes(username) {
        const url = AppConfig.URL.GET_USER_NODES.replace('{username}', username);
        return this.http.get<any>(url);
    }

    follow(userId) {
        const url = AppConfig.URL.USER_FOLLOW.replace('{id}', userId);
        console.log(url);
        return this.http.get<any>(url);
    }

    abortFollow(userId) {
        const url = AppConfig.URL.USER_ABORT_FOLLOW.replace('{id}', userId);
        console.log(url);
        return this.http.get<any>(url);
    }
}
