import { Component ,AfterViewInit} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { NewsLetterComponent } from '../news-letter/news-letter.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';
declare var bootstrap: any;
@Component({
  standalone: true,
  imports: [ProductComponent, NewsLetterComponent, LatestNewsComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit() {
    window.scroll(0,0)
    const carouselElement = document.getElementById('carouselExampleCaptions');
    new bootstrap.Carousel(carouselElement, {
        interval: 2000, // time in milliseconds for auto-slide
        ride: 'carousel'
    });
}
}
