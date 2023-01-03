import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginError = '';
  protected login = '';
  protected password = '';

  constructor(private authService: AuthService) { }

  public submitForm(){
    if (!this.authService.login(this.login, this.password)){
      this.loginError = 'Имя пользователя или пароль введены неверно';
    } else {
      this.loginError = '';
    }
  }
}
