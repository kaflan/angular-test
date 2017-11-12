import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.interface';
import {Users} from '../Users.Mock';


@Injectable()
export class AuthService implements CanActivate {
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private router: Router) {
    if (this.authenticated) {
      this.setLoggedIn(true);
    }
  }

  getUser(user: User): any {
    const findUserName = Users.find((x, i, obs) => x.email === user.email);
    // debugger
    const password = Users.find((x, i, obs) => {
      return  x.email === user.email && x.password === user.password;
    }) || 'wrong password';
    return (new Observable(observer => {
      if (typeof findUserName === 'object' && typeof password === 'object') {
        this.timeOut(observer, findUserName);
      }
      if (typeof findUserName === 'undefined') {
          this.timeOut(observer, 'user not found');
      }
      if (typeof findUserName === 'object' && typeof password === 'string') {
        this.timeOut(observer, 'password wrong');
      }
    }));
  }
  timeOut (observer, value) {
    setTimeout(() => {
      observer.next(value);
      observer.complete();
    }, 100);
  }
  canActivate() {
    this.logOut();
    this.router.navigate(['']);
    return false;
  }

  setLoggedIn(value: boolean) {
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login(value = true) {
    console.log('___', 'login');
    this.setLoggedIn(value);
  }

  logOut(value = false) {
    this.setLoggedIn(value);
  }

  get authenticated() {
    return this.loggedIn;
  }

}
