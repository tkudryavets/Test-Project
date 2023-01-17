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

  public addPlan(data: IDay): void {
    let arr = this.plans$.value;
    let ind = arr.findIndex((obj) => obj.date == data.date);
    if (ind == -1) {
      return this.plans$.next(this.plans$.value.concat(data));
    }
  }
}
