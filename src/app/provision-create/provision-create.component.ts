import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-provision-create',
  templateUrl: './provision-create.component.html',
  styleUrls: ['./provision-create.component.scss']
})
export class ProvisionCreateComponent implements OnInit {

  constructor() {
  }

  provisionCreateForm = new FormGroup({
    company: new FormControl('Gibi Systems', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    country: new FormControl('USA', [Validators.required]),
    dateCreated: new FormControl('02-28-2018', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    dateModified: new FormControl('02-28-2018', [Validators.required]),
    userId: new FormControl('xyz', [Validators.required]),
    serviceTypePreferred: new FormControl('', [Validators.required]),
    bandwidthRequired: new FormControl('', [Validators.required]),
    workLog: new FormControl('', [Validators.required])
  });


  ngOnInit() {
  }


  get company() {
    return this.provisionCreateForm.get('company');
  }

  get addressLine1() {
    return this.provisionCreateForm.get('addressLine1');
  }

  get addressLine2() {
    return this.provisionCreateForm.get('addressLine2');
  }

  get city() {
    return this.provisionCreateForm.get('city');
  }

  get state() {
    return this.provisionCreateForm.get('state');
  }

  get postalCode() {
    return this.provisionCreateForm.get('postalCode');
  }

  get country() {
    return this.provisionCreateForm.get('country');
  }

  get dateCreated() {
    return this.provisionCreateForm.get('dateCreated');
  }

  get dateModified() {
    return this.provisionCreateForm.get('dateModified');
  }

  get status() {
    return this.provisionCreateForm.get('status');
  }

  get userId() {
    return this.provisionCreateForm.get('userId');
  }

  get serviceTypePreferred() {
    return this.provisionCreateForm.get('serviceTypePreferred');
  }

  get bandwidthRequired() {
    return this.provisionCreateForm.get('bandwidthRequired');
  }
}
