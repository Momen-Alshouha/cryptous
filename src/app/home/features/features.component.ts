import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../info-box/info-box.component';
import { CommonModule } from '@angular/common';
import { InfoBox } from '../../interfaces/info-box';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [InfoBoxComponent,CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})

export class FeaturesComponent {
  protected featuresInfo : InfoBox[] = [
    {
      image:'icon1.svg',
      title:'Ease of Trading',
      text:['Intuitive interface','Instant deposit options','Cash out directly to your bank account']
    },
    {
      image:'icon2.svg',
      title:'Institutional-grade Security',
      text:['98% of assets stored safely offline','Highly encrypted personal data','Whitelisting and transaction confirmations']
    },
    {
      image:'icon3.svg',
      title:'Proven Reliability',
      text:['Exchanging bitcoin since 2011','Industry-leading uptime','24/7 dedicated support']
    }];
    
}
