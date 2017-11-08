import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {


  constructor(private http: Http) {
  }

  authenticate(user: any) {
    let url     = 'http://127.0.0.1:15001/app_dev.php/api/login_check';
    let body     = new URLSearchParams();
    body.append('username', user.username);
    body.append('password', user.password);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    return this.http
        .post(url, body.toString(), options)
        .map((data: Response) => data.json());
  }

  logout() {
    localStorage.removeItem('token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

  whoami() {
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');
    return jwtHelper.decodeToken(token).username;
  }
  


}
