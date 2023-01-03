import { Component, OnInit } from '@angular/core';
import {NAVIGATION_LINKS} from 'src/app/entities/constants/router.constants';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent {
  public readonly navigationLinks = NAVIGATION_LINKS;
}
