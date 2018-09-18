import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as pizzasReducer from '../reducers/pizzas.reducer';
import { Pizza } from '../../models/pizza.model';
//pizzas state
export const getPizzasState = createSelector(fromFeature.getProductState, (state: fromFeature.ProductsState) => state.pizzas);
//jump down the state tree
export const getPizzasEntities = createSelector(getPizzasState, pizzasReducer.getPizzasEntities);
//use selectors to compose brand new state,
//convert object data structure into an array
export const getAllPizzas = createSelector( 
  getPizzasEntities,
  (entities) => {
    //map over each entitity looking them up by their ids
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]); //convert to int b/c Object.keys returns a string
  }
 )

 export const getSelectedPizza = createSelector(
    getPizzasEntities,  //feature state
    fromRoot.getRouterState, //root state
    (entities, router): Pizza => {
      return router.state && entities[router.state.params.pizzaId]
    }
 )
export const getPizzasLoaded = createSelector(getPizzasState, pizzasReducer.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzasState, pizzasReducer.getPizzasLoading);