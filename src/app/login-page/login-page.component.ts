import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
loginForm = new FormGroup({
  'email': new FormControl([''], {validators: [Validators.required]}),
  'password': new FormControl([''], {validators: [Validators.required]}),
  })

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log('Submitted!');
    console.log(this.loginForm.value)
  }

}
