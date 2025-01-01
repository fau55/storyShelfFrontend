import { Component } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../../Services/cart.service';
import Swal from 'sweetalert2';
import { SeeAllComponent } from '../see-all/see-all.component';


@Component({
  standalone: true,
  imports: [CommonModule, SeeAllComponent],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productArray: any[] = [];
  trendingProducts: any[] = [];
  bestSellerProducts: any[] = [];
  newArrivalProducts: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService

  ) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.productArray = res.Product;
        this.filterTrendingProducts();
        this.filterBestSellerProducts();
        this.filterNewArrivalProducts()
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  filterTrendingProducts(): void {
    this.trendingProducts = this.productArray.filter((product: any) =>
      product.tags.some((tag: any) => tag.name == 'Trending')
    );
  }

  filterBestSellerProducts(): void {
    this.bestSellerProducts = this.productArray.filter((product: any) =>
      product.tags.some((tag: any) => tag.name == 'Best Seller')
    );
  }
  filterNewArrivalProducts(): void {
    this.newArrivalProducts = this.productArray.filter((product: any) =>
      product.tags.some((tag: any) => tag.name == 'New Arrival')
    );
  }


  viewDetails(productId: any): void {
    this.router.navigate(['/product-details/', productId])
  }

  addToCart(product: any) {
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
      productId: product._id,
      quantity: 1, // Set a default quantity of 1
      priceAtPurchase: product.productPrice
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
