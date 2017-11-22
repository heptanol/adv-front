import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserRepositoryService} from './user-repository.service';
import {AuthenticationService} from '../authentication/authentication.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {};
  error: string = '';


  constructor(
      private userRepository: UserRepositoryService,
      private route: ActivatedRoute,
      private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || this.authenticationService.whoami();
    this.userRepository.get(id)
        .subscribe(
            data => this.user = data,
            error => this.error = error.message
        );

    
  }

}
