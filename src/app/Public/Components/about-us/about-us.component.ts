import { Component } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css',
    standalone: true
})
export class AboutUsComponent {
  ngOnInit(){
    window.scroll(0,0)
  }
}
