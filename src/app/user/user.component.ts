import { Component, OnInit } from '@angular/core';
import {UserRepositoryService} from './user-repository.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[] = [];
  error: string = '';

  constructor(private userRepository: UserRepositoryService) { }

  ngOnInit() {
    this.userRepository
        .getList()
        .subscribe(
            data => this.users = data,
            error => this.error = error.message
        );
  }

}
