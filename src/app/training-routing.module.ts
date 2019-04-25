import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './training/products/products.component';
import { HomeComponent } from './training/home/home.component';
import { ObservableExampleComponent } from './training/observable-example/observable-example.component';
import { HttpServiceExampleComponent } from './training/http-service-example/http-service-example.component';
import { ProductDetailsComponent } from './training/product-details/product-details.component';
import { ProductsGuard } from './services/products.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, canActivate: [ProductsGuard] },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'observables', component: ObservableExampleComponent },
  { path: 'api', component: HttpServiceExampleComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
