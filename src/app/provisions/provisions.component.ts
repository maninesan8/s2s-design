import {Component, Input, OnInit} from '@angular/core';
import {ProvisionService} from '../services/provision.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-provisions',
  templateUrl: './provisions.component.html',
  styleUrls: ['./provisions.component.scss']
})
export class ProvisionsComponent implements OnInit {

  user;
  origProvisions;
  provisions;
  searchText;
  page;

  constructor(private _provisionService: ProvisionService,
              private _router: Router,
              private _routes: ActivatedRoute, private _authService: AuthService) {
  }

  ngOnInit() {

    this.user = this._authService.currentUser;
    this._provisionService.getProvisions(this.user).subscribe((data) => {
      this.origProvisions = data;
      this.provisions = this.origProvisions;
      this.page = {start: 0, end: environment.provision.pageCount - 1};
    }, (error2 => {
      console.log(error2);
    }));
  }

  goToProvision(provisionId) {
    this._router.navigate(['./', provisionId], {relativeTo: this._routes});
  }

  goToCreateProvision() {
    this._router.navigate(['./create'], {relativeTo: this._routes});
  }

  updatePage(page) {
    console.log(page);
    this.page = page;
  }

}
