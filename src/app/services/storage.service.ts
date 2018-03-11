import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {



  constructor() { }

  add() { }

  remove(key: string) {
    localStorage.removeItem(key);
  }


}
