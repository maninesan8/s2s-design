import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalValidator} from '../common/validator/GlobalValidator';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  response: any = {};

  fgtPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, GlobalValidator.emailFormat])
  });

  ngOnInit() {
  }

  onFgtPwdClick(email: string) {
    this.accountService.sendForgotPwdEmail(email).subscribe((data) => {
      if (data.posted) {
        this.response.emailSent = true;
      }
    });
  }

  get email() {
    return this.fgtPasswordForm.get('email');
  }

}
