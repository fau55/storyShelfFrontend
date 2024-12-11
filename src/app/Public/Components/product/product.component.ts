import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../Services/product.service';
import { CartService } from '../../../Services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productsArray: any
  search! : ''

  constructor(
    private router: Router,
    private productService: ProductService, private cartService: CartService) {
    this.getAllProdcts()
  }

  ngOnInit(){
    window.scroll(0,0)
  }
  getAllProdcts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      console.log(res)
      this.productsArray = res.Product
    })

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
  

  viewDetails(productId: any) {
    this.router.navigate(['/product-details/', productId])
  }

}
