import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = 'https://storyshelfbackend-1.onrender.com/api/cart/';

  constructor(private http: HttpClient) { }
  //get all cart by userid
  getAllCart() {
    return this.http.get(this.baseUrl + `getall`)
  }
  //get cart by userid
  getCartByUserId(userId: any) {
    return this.http.get(this.baseUrl + `get/by/${userId}`)
  }
  //add cart by user id
  addToCartProduct(product: any, id: string) {
    return this.http.post(this.baseUrl + `add/product/${id}`, product)
  }
  // delete cart by user id
  deleteItembyItemId(userId: string, itemId: string) {
    return this.http.get(this.baseUrl + `remove/item/by/${userId}/${itemId}`)
  }
  //delete all cart 
  deleteAllCart() {
    return this.http.get(this.baseUrl + `deleteall`)
  }
}


