import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private isUserLoggedIn;
  public usserLogged:User;
  constructor() { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  
  }
  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }
}
