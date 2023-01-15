import { Component, Input, OnInit } from '@angular/core';
import { IDay } from 'src/app/entities/constants/plans.constants';

@Component({
  selector: 'app-profile-plans',
  templateUrl: './profile-plans.component.html',
  styleUrls: ['./profile-plans.component.css']
})
export class ProfilePlansComponent implements OnInit {
  @Input() plans: IDay[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
