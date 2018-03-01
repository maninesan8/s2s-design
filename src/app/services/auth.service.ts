import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../common/account/User';

@Injectable()
export class AuthService {

  sessionUser;

  constructor(private _http: HttpClient) {
  }

  login(credentials) {
    return this._http.post('/api/authenticate', {username: credentials.username, password: credentials.password}).map((user: User) => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.sessionUser = user;
        return user;
      } else {
        return null;
      }
    });
  }

  isLoggedIn(roles: Array<string>) {
    if (this.currentUser && roles.indexOf(this.currentUser.type.toLowerCase) && this.currentUser.token) {
      return true;
    }
    return false;
  }

  get currentUser() {
    return this.sessionUser;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.sessionUser = null;
  }
}
