import {Component, OnInit} from '@angular/core';
import {User} from '../common/account/User';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.user = this._authService.currentUser;
  }

}
