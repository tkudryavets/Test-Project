import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginError = '';
  public form = new FormGroup(
    {
      login: new FormControl(),
      password: new FormControl(),
    },
  );

  constructor(private authService: AuthService) { }

  public submitForm(){
    if (!this.authService.login(this.form.controls.login.value, this.form.controls.password.value)){
      this.loginError = 'Имя пользователя или пароль введены неверно';
    } else {
      this.loginError = '';
    }
  }
}
