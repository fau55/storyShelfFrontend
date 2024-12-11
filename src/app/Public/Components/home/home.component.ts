import { Component ,AfterViewInit} from '@angular/core';
declare var bootstrap: any;
@Component({
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
