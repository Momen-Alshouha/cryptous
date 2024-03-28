import { Component } from '@angular/core';
import { InfoBox } from '../../interfaces/info-box';
import { InfoBoxComponent } from '../../info-box/info-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [InfoBoxComponent, CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  data: InfoBox[] = [
    {
      title:
        'New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange',
      image: 'article1.svg',
      text: [
        'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
      ],
      author: 'Jennia Peris',
      date: new Date().toLocaleString(),
      mntsToRead: 5,
    },
    {
      title:
        'New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange',
      image: 'article2.svg',
      text: [
        'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
      ],
      author: 'Jennia Peris',
      date: new Date().toLocaleString(),
      mntsToRead: 5,
    },
    {
      title:
        'New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange',
      image: 'article3.svg',
      text: [
        'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
      ],
      author: 'Jennia Peris',
      date: new Date().toLocaleString(),
      mntsToRead: 5,
    },
  ];
}
