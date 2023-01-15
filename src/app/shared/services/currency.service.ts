import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

  constructor(private httpClient: HttpClient) {}

  getRates() {
    return this.httpClient
      .get(this.apiUrl)
      .pipe(
        map((response) => {
          return this.transformResponse(response as Array<any>);
        })
      )
  }

  private transformResponse(response: Array<any>) {
    return response.map((elem) => {
      return { name: elem.Cur_Name, rate: elem.Cur_OfficialRate };
    });
  }
}
