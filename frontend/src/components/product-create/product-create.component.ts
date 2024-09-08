import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../app/products.service';
import { CommonModule } from '@angular/common';

export interface Product {
  id?: string;
  productName: string;
  code: string;
  expirationDate: string;
}

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductCreateComponent {
  @Output() productCreated = new EventEmitter<void>();
  product: Product;

  constructor(private productService: ProductsService) {
    this.product = {
      id: '',
      productName: '',
      code: '',
      expirationDate: ''
    };
  }

  createProduct(product: Product) {
    const { id, ...productWithoutId } = product;

    this.productService.createProduct(productWithoutId as Product).subscribe({
      next: () => {
        this.product = { id: '', productName: '', code: '', expirationDate: '' };
        console.log('Product created successfully');
        this.productCreated.emit();
      },
      error: (err) => {
        console.error('Error:', err.message);
        alert(err.message || 'An error occurred while creating the product');
      }
    });
  }
}
