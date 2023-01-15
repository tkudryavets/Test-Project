import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyTableComponent } from './currency-table.component';
import { MatTableModule } from '@angular/material/table'



@NgModule({
  declarations: [
    CurrencyTableComponent
  ],
  imports: [
    CommonModule, MatTableModule
  ],
  exports: [CurrencyTableComponent]
})
export class CurrencyTableModule { }
