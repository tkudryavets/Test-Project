import { Component, OnInit } from '@angular/core';
import { IDay } from 'src/app/entities/constants/plans.constants';
import { PlansService } from 'src/app/shared/services/plans.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public plans: IDay[] = [];

  constructor(private plansService: PlansService) { }

  ngOnInit(): void {
    this.plansService.plans$.subscribe((plans) => this.plans = plans.filter((p) => new Date(p.date).getTime() > new Date().getTime()));
  }

}
