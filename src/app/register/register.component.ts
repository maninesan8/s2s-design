import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalValidator} from '../common/validator/GlobalValidator';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registered = false;
  userType: string = null;

  constructor(private _accountService: UserService) {
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    email: new FormControl('', [Validators.required, GlobalValidator.emailFormat]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    type: new FormControl('customer', [Validators.required]),
    company: new FormControl()
  });

  ngOnInit() {
  }

  registerUser(userInfo) {
    this._accountService.addUser(userInfo).subscribe((response: any) => {
      if (response && response.type === 'customer') {
        this.registered = true;
        this.userType = response.type;
      } else if (response.type === 'admin') {
        this.registered = true;
        this.userType = 'admin';
      } else {
        this.registerForm.setErrors({isValid: false, message: 'Error in Registering the user. Please try again.'});
      }
    }, (error) => {
      this.registerForm.setErrors({isValid: false, message: error});
    });
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get type() {
    return this.registerForm.get('type');
  }

  get company() {
    return this.registerForm.get('company');
  }
}