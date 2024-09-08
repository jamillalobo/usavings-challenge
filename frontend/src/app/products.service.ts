import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../components/product-create/product-create.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  host = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<{ message: string; productsData: Product[] }>(this.host)
      .pipe(map(response => response.productsData));
  }

  createProduct(product: Product) {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    });
    return this.http.post(`${this.host}`, product, { headers });
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<{ message: string; existingProduct: Product }>(`${this.host}/${id}`).pipe(
      map(response => response.existingProduct)
    );
  }

  updateProduct(updatedProduct: Product): Observable<any> {
    return this.http.put(`${this.host}/${updatedProduct.id}`, updatedProduct);
  }


  deleteProduct(id: string) {
    return this.http.delete<{ message: string; deletedProduct: Product }>(`${this.host}/${id}`).pipe(
      map(response => response.deletedProduct)
    );
  }
}
