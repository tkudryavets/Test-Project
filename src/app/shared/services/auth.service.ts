import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from 'src/app/entities/constants/users.constants';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public isLoggedIn = false;
  private users = USERS;
  
  constructor(private router: Router) {}

  public login(name: string, password: string) {
    let isUserExist = !!(this.users.filter((elem) => {
      return elem.name == name && elem.password == password
    }).length);
    if(isUserExist){
      this.isLoggedIn = true;
      this.router.navigateByUrl('/profile');
      return true;
    }
    return false;
  }

  public logout() {
    this.isLoggedIn = false;
  }
}