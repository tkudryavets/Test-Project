import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarDialogComponent } from 'src/app/shared/components/calendar-dialog/calendar-dialog.component';
import { CalendarUpdateDialogComponent } from 'src/app/shared/components/calendar-update-dialog/calendar-update-dialog.component';
import { PlansService } from 'src/app/shared/services/plans.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IDay } from 'src/app/entities/interfaces/IDay.interface';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Select, Store } from '@ngxs/store';
import { AppState } from 'src/app/app.state';
import { AddPlan, GetPlans, UpdatePlan } from 'src/app/app.action';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit, OnDestroy, DoCheck {
  public days: IDay[] = [];
  public firstWeek: IDay[] = [];
  public selectedMonth = new Date();
  public months = [
    'Янв',
    'Февр',
    'Март',
    'Апр',
    'Май',
    'Июнь',
    'Июль',
    'Авг',
    'Сент',
    'Окт',
    'Нояб',
    'Дек',
  ];
  public plans: IDay[] = [];
  public selectedDay: IDay | undefined = undefined;
  private subscribes: Subscription[] = [];

  @Select(AppState.selectStateData)
  plans$!: BehaviorSubject<IDay[]>;

  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetPlans());
    this.plans$.subscribe((returnData) => {
      this.plans = returnData;
    });
    this.calcMonth(this.selectedMonth);
  }

  ngDoCheck(): void {
    this.calcMonth(this.selectedMonth);
  }

  ngOnDestroy(): void {
    this.subscribes.forEach((sub) => sub.unsubscribe);
  }

  private calcMonth(day: Date) {
    day = new Date(day);
    let daysAmount = new Date(
      day.getFullYear(),
      day.getMonth() + 1,
      0
    ).getDate();
    let daysAmountPrev = new Date(
      day.getFullYear(),
      day.getMonth(),
      0
    ).getDate();
    let firstDay = new Date(day.getFullYear(), day.getMonth(), 1).getDay();
    this.firstWeek = [];
    this.days = [];

    if (!firstDay) {
      for (let i = 6; i > 0; i--) {
        if (!day.getMonth()) {
          this.firstWeek.push({
            date: new Date(
              day.getFullYear(),
              day.getMonth() - 1,
              daysAmountPrev - i + 1
            ),
            advent: '',
            participants: '',
            id: new Date(
              day.getFullYear(),
              day.getMonth() - 1,
              daysAmountPrev - i + 1
            ).getTime(),
          });
        } else {
          this.firstWeek.push({
            date: new Date(
              day.getFullYear(),
              day.getMonth() - 1,
              daysAmountPrev - i + 1
            ),
            advent: '',
            participants: '',
            id: new Date(
              day.getFullYear(),
              day.getMonth() - 1,
              daysAmountPrev - i + 1
            ).getTime(),
          });
        }
      }

      let sunday = this.plans.find(
        (el) =>
          new Date(el.date).getTime() ==
          new Date(day.getFullYear(), day.getMonth(), 1).getTime()
      );
      if (sunday) this.firstWeek.push(sunday);
      else
        this.firstWeek.push({
          date: new Date(day.getFullYear(), day.getMonth(), 1),
          advent: '',
          participants: '',
          id: new Date(
            day.getFullYear(),
            day.getMonth(),
            daysAmountPrev + 1
          ).getTime(),
        });
    }

    //if not sunday
    else {
      for (let i = firstDay - 1; i > 0; i--) {
        this.firstWeek.push({
          date: new Date(
            day.getFullYear(),
            day.getMonth() - 1,
            daysAmountPrev - i + 1
          ),
          advent: '',
          participants: '',
          id: new Date(
            day.getFullYear(),
            day.getMonth() - 1,
            daysAmountPrev - i + 1
          ).getTime(),
        });
      }

      for (let i = 1; this.firstWeek.length < 7; i++) {
        let day1 = this.plans.find(
          (el) =>
            new Date(el.date).getTime() ==
            new Date(day.getFullYear(), day.getMonth(), i).getTime()
        );
        this.firstWeek.push(
          day1 || {
            date: new Date(day.getFullYear(), day.getMonth(), i),
            advent: '',
            participants: '',
            id: new Date(day.getFullYear(), day.getMonth(), -i).getTime(),
          }
        );
      }
    }

    if (firstDay) {
      for (
        let i =
          (this.firstWeek[this.firstWeek.length - 1].date as Date).getDate() +
          1;
        i <= daysAmount;
        i++
      ) {
        this.days.push(
          this.plans.find(
            (el) =>
              new Date(el.date).getTime() ==
              new Date(day.getFullYear(), day.getMonth(), i).getTime()
          ) || {
            date: new Date(day.getFullYear(), day.getMonth(), i),
            advent: '',
            participants: '',
            id: new Date(day.getFullYear(), day.getMonth(), i).getTime(),
          }
        );
      }
    } else {
      for (let i = 2; i <= daysAmount; i++) {
        this.days.push(
          this.plans.find(
            (el) =>
              new Date(el.date).getTime() ==
              new Date(day.getFullYear(), day.getMonth(), i).getTime()
          ) || {
            date: new Date(day.getFullYear(), day.getMonth(), i),
            advent: '',
            participants: '',
            id: new Date(day.getFullYear(), day.getMonth() - 1, i).getTime(),
          }
        );
      }
    }
  }

  public minusMonth() {
    this.selectedMonth = new Date(
      this.selectedMonth.setMonth(this.selectedMonth.getMonth() - 1)
    );
    this.calcMonth(this.selectedMonth);
  }

  public plusMonth() {
    this.selectedMonth = new Date(
      this.selectedMonth.setMonth(this.selectedMonth.getMonth() + 1)
    );
    this.calcMonth(this.selectedMonth);
  }

  public selectToday() {
    this.selectedMonth = new Date();
    this.calcMonth(this.selectedMonth);
  }

  public onKey(event: any) {
    if (event.key == 'Enter') {
      this.plans.forEach((item) => {
        if (
          item.advent
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item.participants
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        ) {
          this.selectedMonth = new Date(item.date);
          this.calcMonth(this.selectedMonth);
          return;
        }
      });

      if (Date.parse(event.target.value)) {
        this.selectedMonth = new Date(event.target.value);
        this.calcMonth(this.selectedMonth);
      }
    }
  }

  public addAdvent() {
    const dialogRef = this.dialog.open(CalendarDialogComponent, {
      position: {
        top: 'calc(50vh - 10.875 * 1rem)',
        left: 'calc(50vw - 14.125 * 1rem)',
      },
      data: {},
    });
    this.subscribes.push(
      dialogRef.afterClosed().subscribe((data: IDay) => {
        this.store.dispatch(new AddPlan(data));
      })
    );
  }

  public onSelect(day: IDay): void {
    this.selectedDay = day;
  }

  public updateDay(): void {
    if (this.selectedDay) {
      if (typeof this.selectedDay.date == 'string')
        this.selectedDay.date = new Date(this.selectedDay.date);

      const dialogRef = this.dialog.open(CalendarUpdateDialogComponent, {
        position: {
          top: 'calc(50vh - 10.875 * 1rem)',
          left: 'calc(50vw - 14.125 * 1rem)',
        },
        data: {
          day: this.selectedDay,
        },
      });
      this.subscribes.push(
        dialogRef.afterClosed().subscribe((data: IDay) => {
          this.store.dispatch(new UpdatePlan(data));
        })
      );
      this.selectedDay = undefined;
    }
  }
}
