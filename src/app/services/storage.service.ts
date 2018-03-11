import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {


  constructor() {
  }

  add(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key) {
    localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }


}
