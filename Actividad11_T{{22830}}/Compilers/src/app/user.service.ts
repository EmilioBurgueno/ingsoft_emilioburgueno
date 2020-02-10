import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  defaultUser: User = {
    name: 'antonio',
    uid: '123332'
  };

  constructor() { }

  getUser(): User {

    return this.defaultUser;

  }
}
