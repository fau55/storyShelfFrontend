import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Services/cart.service';
import { ProductService } from '../../../Services/product.service';
import Swal from 'sweetalert2';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userId: string | null = null;
  cart: any[] = [];
  subTotal: number = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.getCart();
  }

  getCart() {
    this.userId = sessionStorage.getItem('userId');
    if (this.userId) {
      this.cartService
        .getCartByUserId(this.userId)
        .pipe(
          catchError((error) => {
            console.error('Error fetching cart:', error);
            this.cart = [];
            this.subTotal = 0;
            return of([]);
          })
        )
        .subscribe((res: any) => {
          if (!res.cart || res.cart.length === 0) {
            this.cart = [];
            this.subTotal = 0;
            return;
          }

          const cartItems = res.cart[0]?.items || [];
          this.subTotal = res.cart[0]?.totalPrice || 0;

          const productRequests = cartItems.map((item: any) =>
            this.productService.getProductByProductId(item.productId)
          );

          forkJoin(productRequests).subscribe((products: any) => {
            this.cart = cartItems.map((item: any, index: number) => ({
              ...item,
              _id: item._id,
              productDetails: {
                productName: products[index]?.product?.productName,
                productPrice: products[index]?.product?.productPrice,
                productImage:
                  products[index]?.product?.productImages[2]?.image_url,
              },
            }));
          });
        });
    }
  }

  removeItem(itemId: string) {
    let userId = sessionStorage.getItem('userId')!
    this.cartService.deleteItembyItemId(userId, itemId).subscribe(() => {
      this.getCart()
      this.updateSubtotal()
    })
  }

  editQuantity(updatedQuantity: string, itemId: string) {
    const quantity = Number(updatedQuantity);
    if (isNaN(quantity) || quantity <= 0) {
      Swal.fire({
        text: 'Please enter a valid quantity!',
        icon: 'warning',
      });
      return;
    }
    const item = this.cart.find((cartItem) => cartItem._id === itemId);
    if (item) {
      item.quantity = quantity;
      this.updateSubtotal();
    }
  }

  updateSubtotal() {
    this.subTotal = this.cart.reduce(
      (sum, item) => sum + item.quantity * item.productDetails.productPrice,
      0
    );
  }

  checkout() {
    Swal.fire({
      text: 'Checkout successful!',
      icon: 'success',
    });
  }
}
