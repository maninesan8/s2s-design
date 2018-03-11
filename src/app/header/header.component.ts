import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _storageService: StorageService, private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    this._storageService.remove('currentUser');
    this._router.navigate(['login']);
  }

}
