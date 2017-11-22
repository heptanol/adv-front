import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  hasAuthToken() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }
}
