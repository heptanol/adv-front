import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserRepositoryService {

  constructor(private http : HttpClient) {}

  getList() {
    let url = 'http://127.0.0.1:15001/app_dev.php/api/user';
    return this.http.get<any>(url);
  }
  

  get(username) {
    let url = 'http://127.0.0.1:15001/app_dev.php/api/user/'+ username;
    return this.http.get<any>(url);
  }
  
  getNodes(username) {
    let url = 'http://127.0.0.1:15001/app_dev.php/api/nodes/'+ username;
    return this.http.get<any>(url);
  }

}
