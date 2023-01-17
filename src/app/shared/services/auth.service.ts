import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from 'src/app/entities/constants/users.constants';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  public isLoggedIn = false;
  public currentUser = '';

  private users = USERS;

  constructor(private router: Router) {}

  public login(name: string, password: string): boolean {
    let user = this.users.filter((elem) => {
      return elem.name == name && elem.password == password;
    });
    if (user.length) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/profile');
      this.currentUser = user[0].name;
      return true;
    }
    return false;
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.currentUser = '';
  }
}
