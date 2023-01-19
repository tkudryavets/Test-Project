import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetPlans } from 'src/app/app.action';
import { AppState } from 'src/app/app.state';
import { IDay } from 'src/app/entities/interfaces/IDay.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  @Select(AppState.selectStateDataFilter)
  plans$!: Observable<IDay[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetPlans());
  }
}
