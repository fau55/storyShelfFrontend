import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../Services/product.service';
import { CartService } from '../../../Services/cart.service';
import Swal from 'sweetalert2';

interface Product {
  category: string;
  productDescription: string;
  productImages: { image_url: string; _id: string }[];
  productName: string;
  productPrice: number;
  authorName : string;
  stock: number;
  tags: any[];
  _id: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true
})
export class ProductDetailsComponent implements OnInit {
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
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
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

  addToCart() {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      Swal.fire({
        icon: 'error',
        text: 'User is not logged in!',
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['/login']);
      return;
    }

    // Create a product object with a valid quantity
    const newProduct = {
      productId: this.productId,
      quantity: 1, // Set a default quantity of 1
      priceAtPurchase: this.product?.productPrice
    };

    // Call the cart service to add the product to the cart by userId
    this.cartService.addToCartProduct(newProduct, userId).subscribe({
      next: (res) => {
        console.log('Product added to cart:', res);
        Swal.fire({
          icon: 'success',
          text: 'Product added to cart successfully!',
          showConfirmButton: false,
          timer: 2000
        });
      },
      error: (err) => {
        console.error('Error adding product to cart:', err);
        Swal.fire({
          icon: 'error',
          text: 'Failed to add product to cart.',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }

}
