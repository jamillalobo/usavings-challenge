import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { Product, ProductCreateComponent } from '../components/product-create/product-create.component';
import { ProductGetIdComponent } from '../components/product-get-id/product-get-id.component';
import { ProductsGetComponent } from '../components/products-get/products-get.component';
import { ProductUpdateComponent } from '../components/product-update/product-update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCreateComponent, ProductGetIdComponent, ProductsGetComponent, ProductUpdateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onProductCreated() {
    this.loadProducts();
  }
}
