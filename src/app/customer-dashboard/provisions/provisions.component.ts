import {Component, Input, OnInit} from '@angular/core';
import {ProvisionService} from '../../services/provision.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-provisions',
  templateUrl: './provisions.component.html',
  styleUrls: ['./provisions.component.scss']
})
export class ProvisionsComponent implements OnInit {

  @Input('username') username;
  origProvisions;
  provisions;
  searchText;
  page;
  order;
  reverse = false;

  constructor(private _provisionService: ProvisionService,
              private _router: Router,
              private _routes: ActivatedRoute) {
  }

  ngOnInit() {
    this._provisionService.getProvisions(this.username).subscribe((data) => {
      this.origProvisions = data;
      this.provisions = this.origProvisions;
      this.page = {start: 0, end: environment.provision.pageCount - 1};
    }, (error2 => {
      console.log(error2);
    }));
  }

  goToProvision(provisionId) {
    this._router.navigate(['./detail/', provisionId], {relativeTo: this._routes});
  }

  goToCreateProvision() {
    this._router.navigate(['./create'], {relativeTo: this._routes});
  }

  updatePage(page) {
    this.page = page;
  }

}
