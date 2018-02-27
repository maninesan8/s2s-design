import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-wizard',
  templateUrl: './status-wizard.component.html',
  styleUrls: ['./status-wizard.component.scss']
})
export class StatusWizardComponent implements OnInit {

  @Input('status') currentStatus;
  statuses;

  constructor() {
  }

  ngOnInit() {
    this.statuses = [
      {text: 'Prequal<br>request<br>received', status: 'Prequal Request', id: 'PR'},
      {text: 'Quote<br>Provided', status: 'Quote Provided', id: 'QP'},
      {text: 'Order<br>Received', status: 'Order Received', id: 'OR'},
      {text: 'Order Placed<br>with ISP', status: 'Order Placed', id: 'OP'},
      {text: 'Circuit Installed,<br>Details sent<br>to Customer', status: 'Circuit Installed', id: 'CI'}
    ];
    let isActive = true;
    this.statuses.forEach(s => {
      if (isActive) {
        s.isActive = true;
      }
      if (s.status === this.currentStatus) {
        isActive = false;
      }
    });
    console.log(this.statuses);
  }


}
