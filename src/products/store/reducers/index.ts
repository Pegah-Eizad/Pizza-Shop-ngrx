import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
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
//pizzas state
export const getPizzasState = createSelector(getProductState, (state: ProductsState) => state.pizzas);
//jumo down the state tree
export const getAllPizzas = createSelector(getPizzasState, pizzasReducer.getPizzasEntities);
export const getPizzasLoaded = createSelector(getPizzasState, pizzasReducer.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzasState, pizzasReducer.getPizzasLoading);