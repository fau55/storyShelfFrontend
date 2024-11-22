import { Component, AfterViewInit } from '@angular/core';
import { NewsLetterComponent } from '../news-letter/news-letter.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';
import { ProductsComponent } from '../products/products.component';
import { HttpClientModule } from '@angular/common/http';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, NewsLetterComponent, LatestNewsComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit() {
    window.scroll(0, 0)
    const carouselElement = document.getElementById('carouselExampleCaptions');
    new bootstrap.Carousel(carouselElement, {
      interval: 2000, // time in milliseconds for auto-slide
      ride: 'carousel'
    });
  }
}
