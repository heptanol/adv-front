import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  error: string = '';

  constructor(
      private formBuilder: FormBuilder,
      private authenticationService: AuthenticationService,
      private router: Router
  ) {
    this.loginForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authenticationService
        .authenticate(this.loginForm.value)
        .subscribe(
            data => {
              localStorage.setItem('token', data['token']);
              this.authenticationService.loadConnctedUser(data['token']);
            },
            error => {
              this.error = error.statusText;
            }
        );
  }

}
