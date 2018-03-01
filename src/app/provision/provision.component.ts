import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: '[app-provision]',
  templateUrl: './provision.component.html',
  styleUrls: ['./provision.component.scss']
})
export class ProvisionComponent implements OnInit {

  @Input('user') user;
  @Input('provision') provision;

  constructor(private _router: Router, private _routes: ActivatedRoute) {
  }

  ngOnInit() {
  }

  goToProvision(provisionId) {
    this._router.navigate(['./detail/', provisionId], {relativeTo: this._routes});
  }

}
