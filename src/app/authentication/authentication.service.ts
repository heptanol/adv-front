import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient} from '@angular/common/http';
import { AppConfig } from '../app.config';


@Injectable()
export class AuthenticationService {


    constructor(
        private http: HttpClient,
        private jwtHelperService: JwtHelperService
    ) {
    }

    authenticate(user: any) {
        const url     = AppConfig.URL.LOGIN;
        return this.http.post(url, {username: user.username, password: user.password});
    }

    logout() {
        localStorage.removeItem('token');
    }

    loggedIn() {
        const token = localStorage.getItem('token');
        return token ? !this.jwtHelperService.isTokenExpired(token) : false;
    }

    whoami() {
        const token = localStorage.getItem('token');
        return token ? this.jwtHelperService.decodeToken(token).username : null;
    }



}
