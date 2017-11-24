import { Component, OnInit } from '@angular/core';

import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  username: string;

  constructor(private authenticationService: AuthenticationService) {
    this.username = this.authenticationService.whoami();
  }

  ngOnInit() {

  }

}
