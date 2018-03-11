import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../common/account/User';
import {UserStoreService} from '../store/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private  _userStore: UserStoreService,
              private _authService: AuthService,
              private _router: Router) {
  }

  ngOnInit() {
    this._userStore.getUser().subscribe(user => this.user = user);
    console.log(this.user);
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['login']);
  }

}
