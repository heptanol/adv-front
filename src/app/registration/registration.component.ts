import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  error: string = '';

  constructor(
      private formBuilder: FormBuilder,
      private registrationService: RegistrationService
  ) {
    this.registrationForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'email': ['', Validators.required],
      'lastName': ['', Validators.required],
      'firstName': ['', Validators.required],
    });
  }


  ngOnInit() {
  }

  onSubmit() {
    this.registrationService
        .register(this.registrationForm.value)
        .subscribe(data => {
          console.log(data);
        });


    console.log(this.registrationForm);
  }

}
