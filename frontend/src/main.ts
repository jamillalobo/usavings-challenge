import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductGetIdComponent } from './components/product-get-id/product-get-id.component';
import { ProductsGetComponent } from './components/products-get/products-get.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),
    ProductCreateComponent,
  ],
});
