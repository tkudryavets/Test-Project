import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AddPlan, GetPlans, UpdatePlan } from '../app/app.action';
import { IDay } from './entities/interfaces/IDay.interface';
import { PlansService } from './shared/services/plans.service';

export class PlanStateModel {
  Plans: any = [];
}

@State<PlanStateModel>({
  name: 'appstate',
  defaults: {
    Plans: [],
  },
})
@Injectable()
export class AppState {
  constructor(private plansService: PlansService) {}

  @Selector()
  static selectStateData(state: PlanStateModel) {
    return state.Plans;
  }

  @Selector()
  static selectStateDataFilter(state: PlanStateModel){
    let today = new Date();
    today.setDate(today.getDate() - 1);
    return  state.Plans.filter(
      (p: { date: string | number | Date; }) => new Date(p.date).getTime() >= today.getTime()
    ) ;
  }

  @Action(GetPlans)
  getDataFromState(ctx: StateContext<PlanStateModel>) {
    return this.plansService.getPlans().pipe(
      tap((returnData) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          Plans: returnData, 
        });
      })
    );
  }

  @Action(AddPlan)
  addDataToState(ctx: StateContext<PlanStateModel>, { payload }: AddPlan) {
    return this.plansService.addPlan(payload).pipe(
      tap((returnData) => {
        const state = ctx.getState();
        ctx.patchState({
          Plans: [...state.Plans, returnData],
        });
      })
    );
  }

  @Action(UpdatePlan)
  updateDataOfState(
    ctx: StateContext<PlanStateModel>,
    { payload }: UpdatePlan
  ) {
    return this.plansService.updatePlan(payload).pipe(
      tap((returnData) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          Plans:[...state.Plans, returnData],
        });
      })
    );
  }
}
