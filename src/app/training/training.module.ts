import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { HttpServiceExampleComponent } from './http-service-example/http-service-example.component';
import { HomeComponent } from './home/home.component';
import { TrainingRoutingModule } from '../training-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductRatingComponent,
    ObservableExampleComponent,
    HttpServiceExampleComponent,
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TrainingRoutingModule
  ],
  exports: [
    ProductsComponent,
    ObservableExampleComponent,
    HttpServiceExampleComponent
  ]
})
export class TrainingModule { }
