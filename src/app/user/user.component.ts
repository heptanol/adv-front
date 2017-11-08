import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UserRepositoryService} from './user-repository.service';
import { DatePipe } from '@angular/common';

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
      private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.userRepository.get(id)
        .subscribe(
            data => this.user = data,
            error => this.error = error.message,
        );

    
  }

}
