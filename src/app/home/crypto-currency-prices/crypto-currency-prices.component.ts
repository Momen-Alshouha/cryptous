import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crypto-currency-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crypto-currency-prices.component.html',
  styleUrl: './crypto-currency-prices.component.scss',
})
export class CryptoCurrencyPricesComponent implements OnInit {
  cryptocurrencyData: any;
  graphicalCurrencyDataLast7days: any;
  constructor(private _currencyService: CurrencyService) {}

  ngOnInit(): void {
    this._currencyService.getAllCryptocurrencies('usd').subscribe((data) => {
      this.cryptocurrencyData = data;
    });

    // this._currencyService.getGraphicalCurrencyData("").subscribe((data) => {
    //   this.cryptocurrencyData = data;
    // });
    
  }
}
