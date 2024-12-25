import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  standalone: true,
})
export class CategoryComponent {
  constructor(private router: Router) { }
  ngOnInit() {
    window.scroll(0, 0)
  }

  showCategory(category: string) {
    this.router.navigate(['/category-product/', category])

  }
}
