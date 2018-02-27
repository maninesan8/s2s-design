import {Injectable, OnInit} from '@angular/core';
import {HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

@Injectable()
export class MockAPIService implements HttpInterceptor {



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    return Observable.of(null).mergeMap(() => {
      // Authenticates the user for login
      if (req.url.endsWith('api/authenticate') && req.method === 'POST') {
        const cred = JSON.parse(req.body);
        const filteredUser = users.filter(user => user.username === cred.username && user.password === cred.password);
        if (filteredUser.length) {
          const user = filteredUser[0];
          const body = {
            user: user,
            token: 's2s-token'
          };
          return Observable.of(new HttpResponse({status: 200, body: body}));
        } else {
          return Observable.throw('No matching user found for given username. Please verify the username and try again.');
        }
      }
      // Create new user
      if (req.url.endsWith('api/user') && req.method === 'POST') {
        const newUser = JSON.parse(req.body);
        const filteredUser = users.filter(user => user.username === newUser.username);
        if (!filteredUser.length) {
          newUser.username = newUser.firstName.slice(0, 1).toLowerCase() + newUser.lastName;
          newUser.type = 'customer';
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          return Observable.of(new HttpResponse({status: 200, body: {type: newUser.type}}));
        } else {
          return Observable.throw('User with email address already exists');
        }
      }

      if (req.url.indexOf('/api/user') !== -1 && req.method === 'GET') {
        if (req.headers.get('Authorization') === 'Bearer s2s-token') {
          // find user by id in users array
          const urlParts = req.url.split('/');
          const username = urlParts[urlParts.length - 1];
          const matchedUsers = users.filter(user => user.username === username);
          return Observable.of(new HttpResponse({status: 200, body: matchedUsers.length ? matchedUsers[0] : null}));
        } else {
          // return 401 not authorised if token is null or invalid
          return Observable.throw('Unauthorised');
        }
      }

      // Pass thru for the non fake service
      return next.handle(req);
    }).materialize().delay(500).dematerialize();
  }
}

export let mockAPIProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockAPIService,
  multi: true
};