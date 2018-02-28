import {Component, Input, OnInit} from '@angular/core';
import {ProvisionService} from '../../services/provision.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  order;
  reverse = false;

  constructor(private _provisionService: ProvisionService, private _router: Router, private _routes: ActivatedRoute) {
  }

  ngOnInit() {
    this._provisionService.getProvisions(this.username).subscribe((data) => {
      this.origProvisions = data;
      this.provisions = this.origProvisions;
    }, (error2 => {
      console.log(error2);
    }));
  }
  goToProvision(provisionId) {
    this._router.navigate(['./', provisionId], {relativeTo: this._routes});
  }
}
