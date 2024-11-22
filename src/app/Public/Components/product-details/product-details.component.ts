import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../Services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Product {
  category: string;
  productDescription: string;
  productImages: { image_url: string; _id: string }[];
  productName: string;
  productPrice: number;
  stock: number;
  tags: any[];
  _id: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  images: string[] = [
    '../../../../assets/81wfmy9oafl_custom-0faf8f17413857547ce59182be61cde0bc373105.jpeg',
    '../../../../assets/science-fiction book..png',
    '../../../../assets/science-fiction book.webp',
    '../../../../assets/black holes.jpg',
    '../../../../assets/adventure book web.avif'
  ];

  product: Product | null = null;
  productId!: string;
  currentImageIndex = 0;
  isLoading = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    // Fetch productId from route parameters and load data
    this.activeRoute.params.subscribe((params) => {
      this.productId = params['productId'];
      if (this.productId) {
        this.loadProductDetails();
      }
    });
  }

  // Method to load product details
  private loadProductDetails() {
    this.productService.getProductByProductId(this.productId).subscribe({
      next: (res: any) => {
        if (res && res.product) {
          this.product = res.product;
          this.images = res.product.productImages?.map((img: any) => img.image_url) || this.images;
        } else {
          console.error('Product not found in response.');
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
        this.isLoading = false;
      }
    });
  }

  changeImage(index: number, event: Event) {
    event.preventDefault();
    this.currentImageIndex = index;
  }

  getTransform() {
    return `translateX(-${this.currentImageIndex * 100}%)`;
  }

}
