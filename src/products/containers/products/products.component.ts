import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas$ | async)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas$ | async)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  //can only select things form the store that correspond/exist in the productState
  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    /*1st approach: lets us access properties from our store
    creates a selector with a top level prop of 'products' so that
    we can jump a level down into our data structure to access different props*
    "products" matches what's in 'forFeature' method
    this.store.select<any>('products').subscribe(state => {
      console.log(state);
    });*/
    /*2nd approach: observable driven:
    The store will call the select fn and return the selectors, 
    which will return that single slice of state which we are asking for. 
    It will then bind that to the pizzas$ which we are subscribed to with the async pipe*/ 
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
  }
}
