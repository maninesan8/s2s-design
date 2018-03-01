import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {UserDetail} from '../common/account/UserDetail';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username;
  user;

  constructor(private _route: ActivatedRoute, private _accountService: UserService) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe((paramMap) => {
      this.username = paramMap.get('username');
      this._accountService.getUserDetail(this.username).subscribe((resp: UserDetail) => this.user = resp);
    });
  }

}
