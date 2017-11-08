import { Component, OnInit } from '@angular/core';
import {UserRepositoryService} from './user-repository.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent implements OnInit {

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
