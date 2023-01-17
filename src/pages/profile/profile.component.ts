import { Component, OnInit } from '@angular/core';
import { IDay } from 'src/app/entities/interfaces/IDay.interface';
import { PlansService } from 'src/app/shared/services/plans.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public plans: IDay[] = [];

  constructor(private plansService: PlansService) {}

  ngOnInit(): void {
    let today = new Date();
    today.setDate(today.getDate() - 1)
    this.plansService.plans$.subscribe(
      (plans) =>
        (this.plans = plans.filter((p) => new Date(p.date).getTime() >= today.getTime()))
    );
  }
}
