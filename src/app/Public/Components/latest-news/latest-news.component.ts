import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-latest-news',
    templateUrl: './latest-news.component.html',
    styleUrl: './latest-news.component.css',
    standalone: true,
    imports: [RouterLink]
})
export class LatestNewsComponent {
  ngOnInit(){
    window.scroll(0,0)
  }
}
