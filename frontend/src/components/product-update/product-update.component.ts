import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../app/products.service';
import { Product } from '../product-create/product-create.component';

@Component({
  selector: 'product-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  productId: string = '';
  updatedProduct: Product;

  constructor(private productService: ProductsService) {
    this.updatedProduct = {
      id: '',
      productName: '',
      code: '',
      expirationDate: ''
    };
  }

  loadProduct(id: string) {
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        if (product) {
          this.updatedProduct = { ...product };
        } else {
          console.error('Product not found');
        }
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      }
    });
  }

  updateProduct() {
    if (!this.updatedProduct.id) {
      console.error('Product ID is missing');
      return;
    }

    this.productService.updateProduct(this.updatedProduct).subscribe({
      next: (response) => {
        console.log('Product updated successfully', response);
        this.resetForm();
      },
      error: (err) => {
        console.error('Failed to update product', err);
      }
    });
  }

  resetForm() {
    this.productId = '';
    this.updatedProduct = {
      id: '',
      productName: '',
      code: '',
      expirationDate: ''
    };
  }
}
