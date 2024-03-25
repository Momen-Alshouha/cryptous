import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves a list of all cryptocurrencies with their market data.
   * @param currency The currency in which market data is requested (e.g., USD, EUR).
   * @returns An observable of the cryptocurrency market data.
   */
  getAllCryptocurrencies(currency: string): Observable<any> {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`
    );
  }

  /**
   * Retrieves a list of trending cryptocurrencies based on their 24-hour price change percentage.
   * @param currency The currency in which market data is requested (e.g., USD, EUR).
   * @returns An observable of the trending cryptocurrencies.
   */
  getTrendingCryptocurrencies(currency: string): Observable<any> {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
  }

  /**
   * Retrieves graphical data for a specific cryptocurrency over a specified number of days.
   * @param coinId The unique identifier of the cryptocurrency.
   * @param currency The currency in which market data is requested (e.g., USD, EUR).
   * @param days The number of days for which historical data is requested.
   * @returns An observable of the graphical data for the specified cryptocurrency.
   */
  getGraphicalCurrencyData(coinId: string, currency: string, days: number): Observable<any> {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
    );
  }

  /**
   * Retrieves detailed information about a specific cryptocurrency.
   * @param coinId The unique identifier of the cryptocurrency.
   * @returns An observable of the detailed information for the specified cryptocurrency.
   */
  getCurrencyById(coinId: string): Observable<any> {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
  }
}