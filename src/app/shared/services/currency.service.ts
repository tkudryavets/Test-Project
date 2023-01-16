import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';
  public image: any;

  constructor(private httpClient: HttpClient) {}

  getRates() {
    return this.httpClient.get(this.apiUrl).pipe(
      map((response) => {
        return this.transformResponse(response as Array<any>);
      })
    );
  }

  getFlag(code: string) {
    return this.httpClient
      .get('https://countryflagsapi.com/png/' + code, { responseType: 'blob' });
  }

  private transformResponse(response: Array<any>) {
    return response.map((elem) => {
      return {
        name: elem.Cur_Name,
        code: elem.Cur_Abbreviation,
        rate: elem.Cur_OfficialRate,
      };
    });
  }
}
