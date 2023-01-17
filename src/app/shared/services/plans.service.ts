import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { plans } from 'src/app/entities/constants/plans.constants';
import { IDay } from 'src/app/entities/interfaces/IDay.interface';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  public plans$: BehaviorSubject<IDay[]> = new BehaviorSubject<IDay[]>(plans);

  constructor() {}

  public addPlan(day: IDay): void {
    let arr = this.plans$.value;
    let ind = arr.findIndex((obj) => obj.date == day.date);
    if (ind == -1) {
      return this.plans$.next(this.plans$.value.concat(day));
    }
  }

  public updatePlan(day: IDay): void {
    let arr = this.plans$.value;
    let ind = arr.findIndex((obj) => obj.id == day.id);
    if (day.date == '') {
      arr.splice(ind, 1);
      this.plans$.next(arr);
      return;
    }

    if (ind != -1) {
      arr[ind].advent = day.advent;
      arr[ind].date = day.date;
      arr[ind].participants = day.participants;
      this.plans$.next(arr);
    }
  }
}
