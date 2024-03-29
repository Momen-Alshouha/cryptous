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
  loading: boolean = true;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems!: number;
  totalPages: number = Math.ceil(this.totalItems / this.itemsPerPage);

  constructor(private _currencyService: CurrencyService) {}
  ngOnInit(): void {
    this.fetchCryptocurrencyData();
  }

  fetchCryptocurrencyData(): void {
    this._currencyService
      .getAllCryptocurrencies('usd', this.currentPage, this.itemsPerPage)
      .subscribe((data) => {
        this.cryptocurrencyData = data;
        this.totalItems = data.length;
        this.loading = false;
      });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.fetchCryptocurrencyData();
  }
}
