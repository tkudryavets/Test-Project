import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRatesComponent } from './exchange rates.component';
import { ExchangeRatesRoutingModule } from './exchange-rates-routing.module';
import { CurrencyTableModule } from 'src/app/shared/components/currency-table/currency-table.module';

@NgModule({
  declarations: [
    ExchangeRatesComponent
  ],
  imports: [
    CommonModule, ExchangeRatesRoutingModule, CurrencyTableModule
  ],
  exports: [ExchangeRatesComponent],
})
export class ExchangeRatesModule { }
