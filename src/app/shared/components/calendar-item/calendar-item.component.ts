import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { IDay } from 'src/app/entities/interfaces/IDay.interface';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css'],
})

export class CalendarItemComponent implements DoCheck {
  @Input() day: IDay = { date: new Date(), advent: '', participants: '' };
  @Input() isFirstWeek = false;
  @Input() selected = false;

  public status = false;
  public isToday = false;

  protected readonly week = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  public copyDay = { date: new Date(), advent: '', participants: '' };

  constructor() {}

  ngDoCheck(): void {
    this.copyDay.date = new Date(this.day.date);
    this.copyDay.advent = this.day.advent;
    this.copyDay.participants = this.day.participants;
    this.status = this.day.advent != '';
    this.day.date = new Date(this.day.date);

    let now = new Date();
    this.isToday =
      this.copyDay.date.getTime() ==
      new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  }
}
