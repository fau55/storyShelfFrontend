import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css'
})
export class LatestNewsComponent {
  ngOnInit(){
    window.scroll(0,0)
  }
}
