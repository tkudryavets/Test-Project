import { Component } from '@angular/core';
import { NAVIGATION_LINKS } from 'src/app/entities/constants/router.constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css'],
})

export class NavPanelComponent {
  public readonly navigationLinks = NAVIGATION_LINKS;
  public currentUser: string = '';

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.currentUser;
  }
}
