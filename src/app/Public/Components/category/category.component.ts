import { Component } from '@angular/core';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrl: './category.component.css',
    standalone: true
})
export class CategoryComponent {
  ngOnInit(){
    window.scroll(0,0)
  }
}
