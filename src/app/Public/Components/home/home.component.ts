import { Component ,AfterViewInit} from '@angular/core';
import { NewsLetterComponent } from '../news-letter/news-letter.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';
import { ProductComponent } from '../product/product.component';
import { RouterLink } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
declare var bootstrap: any;
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true,
    imports: [RouterLink, ProductComponent, LatestNewsComponent, NewsLetterComponent, ProductListComponent]
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
