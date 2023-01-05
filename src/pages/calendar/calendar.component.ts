import { Component, OnInit } from '@angular/core';
import { IDay, plans } from 'src/app/entities/constants/plans.constants';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public days: IDay[] = [];
  public firstWeek: IDay[] = [];
  public selectedMonth = new Date();
  public months = ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек']
  
  constructor() { 
    const file = new File([], 'plans.json');
    let reader = new FileReader();
    reader.readAsText(file);
    console.log(reader.result);


    let allDays = plans.map((item) => {item.date = new Date(item.date); return item})
    .sort((a, b)=> {return (a.date as Date).getTime() - (b.date as Date).getTime()});
    this.days = allDays;
    this.calcMonth(this.selectedMonth);
  }

  ngOnInit(): void {
   console.log(JSON.stringify(plans));
  }

  private calcMonth(day: Date){
    let daysAmount = new Date(day.getFullYear(), day.getMonth()+1, 0).getDate();
    let daysAmountPrev = new Date(day.getFullYear(), day.getMonth(), 0).getDate();
    let firstDay = new Date(day.getFullYear(), day.getMonth(), 1).getDay();
    this.firstWeek = [];
    this.days = [];

    
    if(firstDay == 0){
      for (let i = 6; i > 0; i--){
        if(!day.getMonth()){
          this.firstWeek.push(
            { date: new Date(day.getFullYear(), day.getMonth()-1, daysAmountPrev - i + 1),
              advent: '',
              participants: ['']}
            );
        }
        else {
          this.firstWeek.push(
            { date: new Date(day.getFullYear(), day.getMonth()-1, daysAmountPrev - i + 1),
              advent: '',
              participants: ['']}
            );
        }
      }

      let sunday = plans.find((el) => (el.date as Date).getTime() == (new Date(day.getFullYear(), day.getMonth(), 1)).getTime());
      if (sunday)
        this.firstWeek.push(sunday);
      else
        this.firstWeek.push(
          { date: new Date(day.getFullYear(), day.getMonth(), 1),
          advent: '',
          participants: ['']}
        );
    }

    //if not sunday
    else {
      for(let i = firstDay-1; i > 0 ; i--){
        this.firstWeek.push(
          { date: new Date(day.getFullYear(), day.getMonth()-1, daysAmountPrev - i + 1),
            advent: '',
            participants: ['']}
        )
      }

      for(let i = 1; this.firstWeek.length < 7; i++){
        let day1 = plans.find((el) => (el.date as Date).getTime() == new Date(day.getFullYear(), day.getMonth(), i).getTime());
        if (day1){
          this.firstWeek.push(day1);
        }
        else {
          this.firstWeek.push(
          { date: new Date(day.getFullYear(), day.getMonth(), i),
            advent: '',
            participants: ['']}
          );
        }
      }
    }


    if(firstDay != 0) {
      for(let i = (this.firstWeek[this.firstWeek.length - 1].date as Date).getDate() + 1; i <= daysAmount; i++) {
        let day1 = plans.find((el) => (el.date as Date).getTime() == new Date(day.getFullYear(), day.getMonth(), i).getTime());
      if (day1){
        this.days.push(day1);
      }
      else {
        this.days.push(
          { date: new Date(day.getFullYear(), day.getMonth(), i),
            advent: '',
            participants: ['']}
            );
          }
        }
    }
    else {
      for(let i = 2; i <= daysAmount; i++) {
        let day1 = plans.find((el) => (el.date as Date).getTime() == new Date(day.getFullYear(), day.getMonth(), i).getTime());
        if (day1){
        this.days.push(day1);
      }
      else {
        this.days.push(
          { date: new Date(day.getFullYear(), day.getMonth(), i),
            advent: '',
            participants: ['']}
            );
      }
    } 
  }
}
      
  public minusMonth(){
    this.selectedMonth = new Date(this.selectedMonth.setMonth(this.selectedMonth.getMonth() - 1));
    this.calcMonth(this.selectedMonth);
  }

  public plusMonth(){
    this.selectedMonth = new Date(this.selectedMonth.setMonth(this.selectedMonth.getMonth() + 1));
    this.calcMonth(this.selectedMonth);
  }

  public selectToday() {
    this.selectedMonth = new Date();
    this.calcMonth(this.selectedMonth);
  }

  public onKey(event: any){
    if(event.key == 'Enter'){
      plans.forEach((item) => {
      if(item.advent.toLowerCase().includes(event.target.value.toLowerCase()) || 
      item.participants.join(', ').toLowerCase().includes(event.target.value.toLowerCase())){
        this.selectedMonth = item.date as Date;
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
}
