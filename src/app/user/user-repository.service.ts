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

    getNodesPosition(username) {
        const url = AppConfig.URL.GET_USER_NODES_POSITIONS.replace('{username}', username);
        return this.http.get<any>(url);
    }

    follow(userId) {
        const url = AppConfig.URL.USER_FOLLOW.replace('{id}', userId);
        console.log(url);
        return this.http.get<any>(url);
    }

    abortFollow(userId) {
        const url = AppConfig.URL.USER_ABORT_FOLLOW.replace('{id}', userId);
        return this.http.get<any>(url);
    }
    
    getIFollow(userId) {
        const url = AppConfig.URL.USER_GET_I_FOLLOW.replace('{id}', userId);
        return this.http.get<any>(url);
    }
    
    getFollowsMe(userId) {
        const url = AppConfig.URL.USER_GET_FOLLOWS_ME.replace('{id}', userId);
        return this.http.get<any>(url);
    }
}
