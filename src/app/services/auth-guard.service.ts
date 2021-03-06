import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const roles = route.data['roles'] as Array<string>;

    if (this._auth.checkForAccess(roles)) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
