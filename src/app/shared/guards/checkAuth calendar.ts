import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class CheckAuthCalendar implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.isLoggedIn ? true : false;
  }
}
