import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }
  
  register(user: any) {
    let url     = 'http://127.0.0.1:15001/app_dev.php/api/register';

    return this.http
        .post<string>(url, {
          username :user.username,
          password: user.password,
          email: user.email,
          lastName: user.lastName,
          firstName: user.firstName,
          sex: user.sex,
          birthdate: user.birthdate.toISOString()
        });
  }

}
