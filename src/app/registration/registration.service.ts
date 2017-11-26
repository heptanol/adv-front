import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable()
export class RegistrationService {

    constructor(private http: HttpClient) { }

    register(user: any) {
        const url = AppConfig.URL.REGISTER;
        return this.http
            .post<string>(url, {
              username : user.username,
              password: user.password,
              email: user.email,
              lastName: user.lastName,
              firstName: user.firstName,
              sex: user.sex,
              birthdate: user.birthdate.toISOString()
            });
    }

}
