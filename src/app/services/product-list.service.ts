import { Injectable } from '@angular/core';
import { Product, products } from './product';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductListService {

  products: Product[];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(products);
  }

}
