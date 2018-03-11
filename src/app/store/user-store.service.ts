import {Injectable} from '@angular/core';
import {User} from '../common/account/User';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

/**
 * UserStore to save the current user. On change of any user detail it should be published to
 */
@Injectable()
export class UserStoreService {

  private _userSubject: Subject<User> = new Subject<User>();

  constructor() {
  }

  addUser(user: User): void {
    this._userSubject.next(user);
  }

  removeUser(): void {
    this._userSubject.next(null);
  }

  getUser(): Observable<User> {
    return this._userSubject.asObservable();
  }
}
