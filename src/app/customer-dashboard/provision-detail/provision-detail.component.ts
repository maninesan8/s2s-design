import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProvisionService} from '../../services/provision.service';

@Component({
  selector: 'app-provision-detail',
  templateUrl: './provision-detail.component.html',
  styleUrls: ['./provision-detail.component.scss']
})
export class ProvisionDetailComponent implements OnInit {

  provisionId;
  provision;

  constructor(private _routes: ActivatedRoute, private _router: Router, private _provisionService: ProvisionService) {
  }

  ngOnInit() {
    this._routes.paramMap.subscribe(params => {
      this.provisionId = params.get('id');
      this._provisionService.getProvision(this.provisionId).subscribe((prov) => {
        this.provision = prov;
      });
    });
  }


}