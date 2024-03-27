import { Component } from '@angular/core';
import { CryptoCurrencyPricesComponent } from './crypto-currency-prices/crypto-currency-prices.component';
import { FeaturesComponent } from './features/features.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CryptoCurrencyPricesComponent,FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
