import { Component, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { InfoBox } from '../interfaces/info-box';
@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
  protected environment = environment; 
  @Input() data!: InfoBox;
  @Input() additionalClasses?: string;
}
