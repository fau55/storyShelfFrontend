import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: any[], searchTerm: string): any[] {
    if (!products || !searchTerm) {
      return products; // If no search term, return all products
    }

    searchTerm = searchTerm.toLowerCase(); // Convert the search term to lowercase for case-insensitive matching

    // Filter products by checking if the product name or category contains the search term
    return products.filter(product => 
      product.productName.toLowerCase().includes(searchTerm) || 
      product.category.toLowerCase().includes(searchTerm)
    );
  }

}
