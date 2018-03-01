import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {

  customers;
  userType = 'customer';

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.getAllUsers(this.userType).subscribe(users => this.customers = users, error2 => {
      console.log(error2);
    });
  }

}
