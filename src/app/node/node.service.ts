import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    get(id) {
        const url = AppConfig.URL.GET_NODE.replace('{id}', id);
        return this.http.get<any>(url);
    }

}
