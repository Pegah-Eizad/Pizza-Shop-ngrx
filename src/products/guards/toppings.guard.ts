import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { of } from 'rxjs/Observable/of';
import { Observable } from 'rxjs/Observable';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class ToppingsGuard implements CanActivate{

    constructor(private store: Store<fromStore.ProductsState>) {}
    
    canActivate(): Observable<boolean> {
      return this.checkStore().pipe(
          switchMap(() => of(true)), //return an observable with a boolean (of true) if things have gone correctly
          catchError(() => of(false))
      );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getToppingsLoaded)
         .pipe(
             tap( loaded => {
                if(!loaded) {
                    this.store.dispatch(new fromStore.LoadToppings());
                }
              }),
              filter(loaded => loaded),  //just return loaded property from filter method
              take(1) //takes 1 value and completes the observable
         )
    }
}