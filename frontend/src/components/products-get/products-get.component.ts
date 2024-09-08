import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../app/products.service';
import { Product } from '../product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'products-get',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products-get.component.html',
  styleUrls: ['./products-get.component.css']
})
export class ProductsGetComponent implements OnInit {
  products: Product[] = [];
  product: Product;
  productId: string = '';
  existingProduct: Product | undefined;
  filterDate: string = '';
  filteredProducts: Product[] = [];

  constructor(private productService: ProductsService) {
    this.product = {
      id: '',
      productName: '',
      code: '',
      expirationDate: ''
    };
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data as Product[];
      this.filteredProducts = this.products;
    });
  }

  filterProducts() {
    if (this.filterDate) {
      this.filteredProducts = this.products.filter(product =>
        product.expirationDate === this.filterDate
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  deleteProduct(id: string | undefined) {
    if (id) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products.filter((p) => p.id !== id);
          console.log('Product deleted successfully');
          this.getProducts();
        },
        error: (error) => {
          console.error('Error deleting product:', error);
        }
      });
    } else {
      console.error('Invalid product ID');
    }
  }
}
