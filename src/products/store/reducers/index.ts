import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as pizzasReducer from './pizzas.reducer';

//register reducers as part of the store in this file
export interface ProductsState {
  pizzas: pizzasReducer.PizzaState
}
//action redcucerMap takes a generic type
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: pizzasReducer.reducer
}

//holds selector for entire lazy loaded module
//create base reference to 'products' prop on state
export const getProductState = createFeatureSelector<ProductsState>('products');