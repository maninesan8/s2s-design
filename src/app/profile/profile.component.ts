import {Component, Input, OnInit} from '@angular/core';
import {UserDetail} from '../common/account/UserDetail';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: '[app-profile]',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: UserDetail;
  @Input('username') username: string;

  constructor(private _route: ActivatedRoute, private _accountService: UserService) {
  }

  ngOnInit() {
    this._accountService.getUserDetail(this.username).subscribe((resp: UserDetail) => this.user = resp);
  }

}
