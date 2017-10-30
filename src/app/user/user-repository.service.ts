import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserRepositoryService {

  constructor(private authHttp: AuthHttp) {}

  getList() {
    let url = 'http://127.0.0.1:12200/user';

    return this.authHttp
        .get(url)
        .map((data: Response) => data.json());
  }

}
