import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductListService } from '../../services/product-list.service';
import { Product } from '../../services/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number;
  productDetails: Product;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductListService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(products => {
      this.productDetails = products.find(p => p.id === this.productId);
    });
  }

  gotoHome() {
    this.router.navigate(["/home"]);
  }

}
