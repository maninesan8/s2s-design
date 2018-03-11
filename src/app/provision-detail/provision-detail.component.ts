import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProvisionService} from '../services/provision.service';
import {Location} from '@angular/common';
import {AuthService} from '../services/auth.service';
import {log} from 'util';

@Component({
  selector: 'app-provision-detail',
  templateUrl: './provision-detail.component.html',
  styleUrls: ['./provision-detail.component.scss']
})
export class ProvisionDetailComponent implements OnInit {

  provisionId;
  provision;
  user;

  constructor(private _routes: ActivatedRoute,
              private _router: Router,
              private _provisionService: ProvisionService,
              private _location: Location,
              private _authService: AuthService) {
  }

  ngOnInit() {
    this.user = this._authService.currentUser;
    this._routes.paramMap.subscribe(params => {
      this.provisionId = params.get('id');
      this._provisionService.getProvision(this.provisionId).subscribe((prov) => {
        this.provision = prov;
        console.log(this.provision);
      });
    });
  }

  goBack() {
    this._location.back();
  }

}
