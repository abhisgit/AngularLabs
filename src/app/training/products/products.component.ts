import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product';
import { ProductListService } from '../../services/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Product[];

  constructor(private productService: ProductListService,
    private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(p => {
      this.productsList = p;
    });
  }

  showMessage(event: string, pid: number): void {
    console.log('event: ', event);
    let index = this.productsList.findIndex(p => p.id === pid);
    this.productsList[index].commnents = event;
  }

  gotoProductDetails(pid: number) {
    this.router.navigate(["/products", pid]);
  }

}
