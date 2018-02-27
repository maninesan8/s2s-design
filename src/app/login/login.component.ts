import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../services/account.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _accountService: AccountService, private _router: Router) {
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
    this._accountService.login(credentials).subscribe((user) => {
      console.log(user);
      if (user && user.type === 'customer') {
        this._router.navigate(['cdash', user.username]);
      } else if (user.type === 'admin') {
        this._router.navigate(['adash', user.username]);
      } else {
        this.loginForm.setErrors({isValid: false, message: 'username and password combination doesn\'t match.'});
      }
    }, (error => {
      console.log(error);
      this.loginForm.setErrors({isValid: false, message: error});
    }));
  }

}
