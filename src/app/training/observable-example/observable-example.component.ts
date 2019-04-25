import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { range } from 'rxjs/observable/range';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  observableNumbers: number[] = [];

  constructor() { }

  ngOnInit() {
    let observables$: Observable<number> = range(1, 10);
    observables$.pipe(
      map(x => x * 3),
      filter(x => x % 2 === 0)
    ).subscribe(x => {
      console.log('x: ', x);
      this.observableNumbers.push(x);
    });

  }

}
