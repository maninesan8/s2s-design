import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {
  }

  addUser(userInfo) {
    return this._http.post('/api/user', JSON.stringify(userInfo));
  }

  getUserDetail(username) {
    return this._http.get('/api/user/' + username);
  }

  getAllUsers(type) {
    return this._http.get('/api/users/' + type);
  }


  resetPassword(reqData: any): Observable<any> {
    return of({'posted': true});
  }

  sendForgotPwdEmail(email: string): Observable<any> {
    return of({'posted': true});
  }

}
