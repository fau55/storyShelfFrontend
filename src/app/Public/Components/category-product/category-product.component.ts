import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../Services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit, OnDestroy {
  categoryProduct: any[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const routeSub = this.activatedRoute.params.subscribe((params: any) => {
      const productSub = this.productService.getAllProducts().subscribe((response: any) => {
        const products = response.Product || [];
        this.categoryProduct = products.filter((element: any) => element.category === params.category);
      });
      this.subscriptions.add(productSub);
    });

    this.subscriptions.add(routeSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
