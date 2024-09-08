import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../app/products.service';
import { Product } from '../product-create/product-create.component';

@Component({
  selector: 'product-get-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-get-id.component.html',
  styleUrl: './product-get-id.component.css'
})
export class ProductGetIdComponent {
  product: Product;
  productId: string = '';

  constructor(private productService: ProductsService) {
    this.product = {
      id: '',
      productName: '',
      code: '',
      expirationDate: ''
    };
  }

  getProduct(id: string | undefined) {
    if (id) {
      this.productService.getProduct(id).subscribe({
        next: (product) => {
          console.log('Product found:', product);
          this.product = product as Product;
        },
        error: (error) => {
          console.error('Error fetching product:', error);
        }
      });
    } else {
      console.error('Invalid product ID');
    }
  }
}
