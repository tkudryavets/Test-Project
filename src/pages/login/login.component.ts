import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginError = '';
  public form = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  public submitForm() {
    if (
      !this.form.valid ||
      !this.authService.login(
        this.form.controls.login.value as string,
        this.form.controls.password.value as string
      )
    ) {
      this.loginError = 'Имя пользователя или пароль введены неверно';
    } else {
      this.loginError = '';
    }
  }
}
