import {Component, Input, OnInit} from '@angular/core';
import {UserDetail} from '../common/account/UserDetail';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-profile]',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input('user') user: UserDetail;
  closeResult;


  constructor(private _route: ActivatedRoute,
              private  _router: Router,
              private _accountService: UserService,
              private _modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open(content) {
    this._modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  goToProvisions() {
    this._router.navigate(['./provisions'], {relativeTo: this._route});
  }

  goToCustomers() {
    this._router.navigate(['./customers'], {relativeTo: this._route});
  }

  goToRegister() {
    this._router.navigate(['/register'], {relativeTo: this._route});
  }
}
