import { Injectable } from '@angular/core';
import { USERS } from 'src/app/entities/constants/users.constants';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public isLoggedIn = false;
  private users = USERS;
  
  constructor() {}

  login(name: string, password: string) {
    let isUserExist = !!(this.users.filter((elem) => {
      return elem.name == name && elem.password == password
    }).length);
    if(isUserExist)
      this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}