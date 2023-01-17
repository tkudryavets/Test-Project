import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject } from 'rxjs';
import { GetPlans } from 'src/app/app.action';
import { AppState } from 'src/app/app.state';
import { IDay } from 'src/app/entities/interfaces/IDay.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public plans: IDay[] = [];

  @Select(AppState.selectStateData)
  plans$!: BehaviorSubject<IDay[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    let today = new Date();
    today.setDate(today.getDate() - 1);
    this.store.dispatch(new GetPlans());
    this.plans$.subscribe((plans) => {
      this.plans = plans.filter(
        (p) => new Date(p.date).getTime() >= today.getTime()
      );
    });
  }
}
