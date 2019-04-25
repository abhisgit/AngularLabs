import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrainingModule } from './training/training.module';
import { ProductListService } from './services/product-list.service';
import { HttpApiService } from './services/http-api.service';
import { TrainingRoutingModule } from './/training-routing.module';
import { ProductsGuard } from './services/products.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TrainingModule,
    TrainingRoutingModule
  ],
  providers: [ProductListService, HttpApiService, ProductsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
