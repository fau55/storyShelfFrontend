import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://localhost:3000/api/product/';

  constructor(private http: HttpClient) { }
  //get all product by product Id
  getAllProducts() {
    return this.http.get(this.baseUrl + "getall")
  }
  //get product by product Id
  getProductByProductId(productId: string) {
    return this.http.get(this.baseUrl + `get/by/${productId}`)
  }
  //delete product by product Id
  deleteProductByProductId(productId: string) {
    return this.http.get(this.baseUrl + `get/by/${productId}`)
  }
  //update product by Product Id
  updateProductByProductId(productId: string) {
    return this.http.get(this.baseUrl + `get/by/${productId}`)
  }
  //delete all product by product Id
  deleteAllProductByProductId(productId: string) {
    return this.http.get(this.baseUrl + `deleteall`)
  }
}
