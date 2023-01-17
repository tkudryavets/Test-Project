import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PLANS } from 'src/app/entities/constants/plans.constants';
import { IDay } from 'src/app/entities/interfaces/IDay.interface';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  private plans$: BehaviorSubject<IDay[]> = new BehaviorSubject<IDay[]>(PLANS);

  constructor() {}

  public getPlans() {
    return this.plans$;
  }

  public addPlan(day: IDay): Observable<IDay[]> {
    if(!day.date) return this.plans$;
    let arr = this.plans$.value;
    let ind = arr.findIndex((obj) => obj.date == day.date);

    if (ind === -1) {
      day.id = new Date(day.date).getTime();
      this.plans$.next(this.plans$.value.concat(day));
    }
    return this.plans$;
  }

  public updatePlan(day: IDay): Observable<IDay[]> {
    let arr = this.plans$.value;
    let ind = arr.findIndex((obj) => obj.id == day.id);
    //если удаляем
    if (day.date === '' && ind !== -1) {
      arr.splice(ind, 1);
      this.plans$.next(arr);
      return this.plans$;
    }

    //не меняли дату
    if (ind !== -1 && arr[ind].id === new Date(day.date).getTime()) {
      arr[ind].advent = day.advent;
      arr[ind].date = day.date;
      arr[ind].participants = day.participants;
      this.plans$.next(arr);
      return this.plans$;
    }

    //меняли дату
    if (ind !== -1 && arr[ind].id !== new Date(day.date).getTime()) {
      arr.splice(ind, 1);
      day.id = new Date(day.date).getTime();
      this.plans$.next(this.plans$.value.concat(day));
    }
    
    //если новый элемент
    if(ind === -1) {
      day.id = new Date(day.date).getTime();
      this.plans$.next(this.plans$.value.concat(day));
    }
    return this.plans$;
  }
}
