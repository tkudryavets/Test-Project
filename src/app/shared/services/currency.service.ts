import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICurrency } from 'src/app/entities/interfaces/ICurrency.interface';

@Injectable({
  providedIn: 'root',
})

export class CurrencyService {
  public image: any;

  private apiUrl = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

  constructor(private httpClient: HttpClient) {}

  public getRates(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      map((response) => {
        return this.transformResponse(response as Array<any>);
      })
    );
  }

  public getFlag(code: string): Observable<any> | null {
    return this.httpClient.get('https://countryflagsapi.com/png/' + code, {
      responseType: 'blob',
    });
  }

  private transformResponse(response: Array<any>): Array<ICurrency> {
    return response.map((elem) => {
      return {
        name: elem.Cur_Name,
        code: elem.Cur_Abbreviation,
        rate: elem.Cur_OfficialRate,
      };
    });
  }
}
