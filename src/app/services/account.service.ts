import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

  endpoint = 'http://localhost:4200/';

  constructor(private _http: HttpClient) {
  }

  login(credentials) {
    return this._http.post(this.endpoint + 'api/authenticate', JSON.stringify(credentials)).map((response: any) => {
      if (response && response.token) {
        localStorage.setItem('apiToken', response.token);
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        return response.user;
      } else {
        return null;
      }
    });
  }

  registerUser(userInfo) {
    return this._http.post(this.endpoint + 'api/user', JSON.stringify(userInfo));
  }

  getUserDetail(username) {
    return this._http.get(this.endpoint + 'api/user/' + username);
  }


  resetPassword(reqData: any): Observable<any> {
    return of({'posted': true});
  }

  sendForgotPwdEmail(email: string): Observable<any> {
    return of({'posted': true});
  }

}