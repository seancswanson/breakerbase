import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RetypeConfirm } from './check-password.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm = new FormGroup({
    'email': new FormControl('', { validators: [Validators.required] }),
    'password': new FormControl('', { validators: [Validators.required] }),
    'checkPasswordnz': new FormControl('', { validators: [RetypeConfirm('password')] }),
    'nickname': new FormControl('', { validators: [Validators.required] }),
    'captcha': new FormControl('', { validators: [Validators.required] }),
    'agree': new FormControl('', { validators: [Validators.required] })
  })

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    console.log('Submitted! And the form is ', this.registerForm.valid);
    console.log(this.registerForm.value);
    this.router.navigate(['/session-log']);
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.registerForm.controls.checkPasswordnz.updateValueAndValidity());
  }
}
