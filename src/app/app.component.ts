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
    usernameConnected: string;
    constructor(private authenticationService: AuthenticationService, private router: Router) {
      this.usernameConnected = authenticationService.whoami();
    }

    hasAuthToken() {
      return localStorage.getItem('token') !== null;
    }
    
    getConnectedUsername() {
        return this.authenticationService.whoami();
    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['home']);
    }
}
