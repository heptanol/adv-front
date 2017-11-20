import { Component, OnInit } from '@angular/core';

import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  authenticationService: AuthenticationService;


  constructor(authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
  }

  ngOnInit() {
  }

  tests() {
    console.log('test');
  }
}
