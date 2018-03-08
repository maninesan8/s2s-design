import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-provision-create',
  templateUrl: './provision-create.component.html',
  styleUrls: ['./provision-create.component.scss']
})
export class ProvisionCreateComponent implements OnInit {

  user;

  constructor(private _location: Location, private _authService: AuthService) {
  }

  provisionCreateForm = new FormGroup({
    company: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    country: new FormControl({value: 'USA', disabled: true}, [Validators.required]),
    dateCreated: new FormControl('02-28-2018', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    circuitPurpose: new FormControl('', [Validators.required]),
    workLog: new FormControl('', [Validators.required]),
    siteId: new FormControl('', [Validators.required]),
    locationPhone: new FormControl('', [Validators.required]),
    siteContact: new FormControl('', [Validators.required]),
    siteContactPhone: new FormControl('', [Validators.required])
  });


  ngOnInit() {
    this.user = this._authService.currentUser;
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

  get zipcode() {
    return this.provisionCreateForm.get('zipcode');
  }

  get country() {
    return this.provisionCreateForm.get('country');
  }

  get dateCreated() {
    return this.provisionCreateForm.get('dateCreated');
  }

  get status() {
    return this.provisionCreateForm.get('status');
  }

  get userId() {
    return this.provisionCreateForm.get('userId');
  }

  get circuitPurpose() {
    return this.provisionCreateForm.get('circuitPurpose');
  }

  get siteId() {
    return this.provisionCreateForm.get('siteId');
  }

  get locationPhone() {
    return this.provisionCreateForm.get('locationPhone');
  }

  get siteContact() {
    return this.provisionCreateForm.get('siteContact');
  }

  get siteContactPhone() {
    return this.provisionCreateForm.get('siteContactPhone');
  }

  goBack() {
    this._location.back();
  }
}
