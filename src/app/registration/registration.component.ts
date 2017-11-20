import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  error: string = '';
  info: string = '';

  constructor(
      private formBuilder: FormBuilder,
      private registrationService: RegistrationService
  ) {
    this.registrationForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'lastName': ['', Validators.required],
      'firstName': ['', Validators.required],
      'birthdate': ['', Validators.required],
      'sex': ['', Validators.required],
    });
  }


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.registrationService
        .register(this.registrationForm.value)
        .subscribe(
            data => {
              console.log(data);
              this.info = data;
            }
        );


    console.log(this.registrationForm);
  }

}
