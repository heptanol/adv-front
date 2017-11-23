import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {


  constructor(
      private http: HttpClient,
      private jwtHelperService: JwtHelperService
  ) {
  }

  authenticate(user: any) {
    let url     = 'http://127.0.0.1:15001/app_dev.php/api/login_check';
    return this.http
        .post(url, {username:user.username, password: user.password});
  }

  logout() {
    localStorage.removeItem('token');
  }

  loggedIn() {
    let token = localStorage.getItem('token');
    return token ? !this.jwtHelperService.isTokenExpired(token) : false;
  }

  whoami() {
    let token = localStorage.getItem('token');
    return token ? this.jwtHelperService.decodeToken(token).username : null;
  }
  


}
