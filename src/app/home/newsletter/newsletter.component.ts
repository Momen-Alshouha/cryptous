import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent {
  email?: string;

  constructor() {}

  subscribe() {
    // Simulation of subscription
    console.log('Subscribing with email:', this.email);
    this.email = '';
  }
}
