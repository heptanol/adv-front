import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { }
  
  register(user: any) {
    let url     = 'http://127.0.0.1:15001/app_dev.php/api/register';
    let body     = new URLSearchParams();
    body.append('username', user.username);
    body.append('password', user.password);
    body.append('email', user.email);
    body.append('lastName', user.lastName);
    body.append('firstName', user.firstName);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    return this.http
        .post(url, body.toString(), options)
        .map((data: Response) => data.json());
  }

}
