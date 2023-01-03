import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected login = '';
  protected password = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.authService.login(this.login, this.password);
  }
}
