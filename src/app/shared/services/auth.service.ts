import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USERS } from '../mocks/users.const';
import { IUser } from './../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = new BehaviorSubject<IUser>(null)
  constructor() { }

  login(username: string, password: string) {
    const user = USERS.find(user => user.username === username && user.password === password)
    if(user) {
      this.user$.next(user)
      return true
    }
    else return false
  }

  logout() {
    this.user$.next(null)
  }
}
