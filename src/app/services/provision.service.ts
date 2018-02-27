import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';

@Injectable()
export class ProvisionService {

  constructor(private _http: HttpClient) {
  }

  getProvisions(username) {
    return this._http.get('/assets/data/provisions.json');
  }

  getProvision(provisionId): Observable<any> {
    return this._http.get('/assets/data/provisions.json').map((resp: any[]) => {
      const selProv = resp.filter(prov => prov.id == provisionId);
      if (selProv) {
        return selProv[0];
      } else {
        return null;
      }
    });
  }

}
