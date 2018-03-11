import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) {
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+[0-9]*$')]),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  signIn(credentials) {
    this._authService.login(credentials).subscribe((res) => {
      // console.log(user);
      if (res && res.status) {
        this._router.navigate(['home']);
      } else {
        this.loginForm.setErrors({isValid: false, message: 'username and password combination doesn\'t match.'});
      }
    }, (error => {
      console.log(error);
      this.loginForm.setErrors({isValid: false, message: error});
    }));
  }

}
