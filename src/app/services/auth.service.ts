import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../common/account/User';
import {StorageService} from './storage.service';
import {current} from 'codelyzer/util/syntaxKind';
import {UserStoreService} from '../store/user-store.service';

@Injectable()
export class AuthService {

  private _sessionUser: User;

  constructor(private _http: HttpClient,
              private _storageService: StorageService,
              private _userStore: UserStoreService) {
    _userStore.getUser().subscribe(user => {
      this._sessionUser = user;
      console.log(user);
    });
  }


  login(credentials) {
    return this._http.post('/api/authenticate', {username: credentials.username, password: credentials.password}).map((user: User) => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this._userStore.addUser(user);
        return {status: true};
      } else {
        return {status: false};
      }
    });
  }

  isLoggedIn() {
    // TODO :: Apply the logic to check the expiry

    if (this._sessionUser && this._sessionUser.token) {
      return true;
    }
    return false;
  }

  checkForAccess(roles: Array<string>) {
    console.log(this._sessionUser);
    if (this._sessionUser && roles.indexOf(this._sessionUser.role.toLowerCase()) > -1 && this._sessionUser.token) {
      return true;
    }
    return false;
  }


  get currentUser() {
    return this._sessionUser;
  }

  get userToken() {
    if (this._sessionUser) {
      return this._sessionUser.token;
    }
    return null;
  }

  logout() {
    this._storageService.remove('currentUser');
    this._userStore.removeUser();
  }
}
