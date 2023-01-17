import { Component, Input } from '@angular/core';
import { IDay } from 'src/app/entities/interfaces/IDay.interface';

@Component({
  selector: 'app-profile-plans',
  templateUrl: './profile-plans.component.html',
  styleUrls: ['./profile-plans.component.css'],
})
export class ProfilePlansComponent {
  @Input() plans: IDay[] = [];

  constructor() {}
}
