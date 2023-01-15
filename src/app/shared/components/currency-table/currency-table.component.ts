import { Component, Input } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent  {
  @Input() dataSource: Array<any> = [];
  
	public displayedColumns: string[] = ['name', 'rate'];

  constructor(private currencyService: CurrencyService) { }
  
}
