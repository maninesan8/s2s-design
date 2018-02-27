import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  username;

  constructor(private _route: ActivatedRoute, private _accountService: AccountService) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe((paramMap) => {
      this.username = paramMap.get('username');
    });
  }

}
