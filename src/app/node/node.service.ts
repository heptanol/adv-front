import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, URLSearchParams } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    get(id) {
        const url = AppConfig.URL.GET_NODE.replace('{id}', id);
        return this.http.get<any>(url);
    }

    getNodes(userId, page) {
        let params = new HttpParams()
            .set('user', userId)
            .set('limit', 20)
            .set('page', page);
        const url = AppConfig.URL.GET_NODES;
        return this.http.get<any>(url, {params: params});
    }

}
