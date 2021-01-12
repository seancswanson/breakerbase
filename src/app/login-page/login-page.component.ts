import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    console.log('Submitted! And the form is ', this.loginForm.valid);
    console.log(this.loginForm.value);
    this.router.navigate(['/session-log']);
  }

}
