import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/services/currency.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange rates.component.html',
  styleUrls: ['./exchange rates.component.css']
})

export class ExchangeRatesComponent implements OnInit {
  
  protected exchangeRates: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getRates()
    .subscribe((value) => {
      this.exchangeRates = value;
    });
  }

}
