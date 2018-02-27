import {Component, Input, OnInit} from '@angular/core';
import {ProvisionService} from '../../services/provision.service';

@Component({
  selector: 'app-provisions',
  templateUrl: './provisions.component.html',
  styleUrls: ['./provisions.component.scss']
})
export class ProvisionsComponent implements OnInit {

  provisions;
  @Input('username') username;

  constructor(private _provisionService: ProvisionService) {
  }

  ngOnInit() {
    this._provisionService.getProvisions(this.username).subscribe((data) => {
      this.provisions = data;
      console.log(this.provisions);
    }, (error2 => {
      console.log(error2);
    }));
  }

}
