import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit, OnChanges {

  @Input() productCost: number;

  @Output() message: EventEmitter<string> = new EventEmitter<string>();

  productRating: number;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    /* cost less than 200 rating 1
    * every 200 rating will increase and max rating is 5
    */
    this.productRating = this.productCost <= 200 ? 1 :
      this.productCost <= 400 ? 2 :
        this.productCost <= 600 ? 3 :
          this.productCost <= 800 ? 4 : 5;

    if (this.productCost >= 1000) {
      this.message.emit('Product cost is high');
    } else {
      this.message.emit('Product cost is average');
    }
  }

}