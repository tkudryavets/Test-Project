import { Component, Input, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/entities/interfaces/ICurrency.interface';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css'],
})

export class CurrencyTableComponent implements OnInit {
  @Input() dataSource: Array<ICurrency> = [];

  public displayedColumns: string[] = ['name', 'rate'];
  public isLoaded = false;

  private flag: any = '';
  private cursor!: HTMLDivElement;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.cursor = document.querySelector('#magicCursor') as HTMLDivElement;
    this.cursorMove();
  }

  public showFlag(row: ICurrency): void {
    this.isLoaded = false;
    if (row.code.slice(0, 2))
      this.currencyService.getFlag(row.code.slice(0, 2))?.subscribe((v) => {
        if (v) this.createImageFromBlob(v);
      });
  }

  private createImageFromBlob(image: Blob): void {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.flag = reader.result;
        this.isLoaded = true;
        (
          this.cursor as HTMLDivElement
        ).style.backgroundImage = `url(${this.flag})`;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  public cursorMove(): void {
    const positionElement = (e: any) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      (
        this.cursor as HTMLDivElement
      ).style.transform = `translate3d(calc(${mouseX}px + 2rem), calc(${mouseY}px + 2rem), 0)`;
    };
    window.addEventListener('mousemove', positionElement);
  }

  public hideFlag(): void {
    this.isLoaded = false;
  }
}
