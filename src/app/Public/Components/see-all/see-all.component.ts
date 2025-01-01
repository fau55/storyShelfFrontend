import { Component, OnInit } from '@angular/core';
import { NewsLetterComponent } from '../news-letter/news-letter.component';
import { Product } from '../../models/Product';
import { ProductService } from '../../../Services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrl: './see-all.component.css'
})
export class SeeAllComponent implements OnInit {
  allProductsArray: Product[] = []
  wishlist: Set<string> = new Set();
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.allProductsArray = res.Product
      console.log(this.allProductsArray);
    })
  }

  addToWishlist(index: number) {
    const product = this.allProductsArray[index];
    if (this.wishlist.has(product._id)) {
      this.wishlist.delete(product._id); // Remove from wishlist
    } else {
      this.wishlist.add(product._id); // Add to wishlist
    }
  }
}
