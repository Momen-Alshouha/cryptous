import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  year : any = new Date().getFullYear()
  ngOnInit(): void {
      console.log(this.year);
      
  }
}
