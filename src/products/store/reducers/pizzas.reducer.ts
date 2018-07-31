import * as pizzaActions from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
    data: Pizza[],
    loaded: boolean,
    loading: boolean
}

export const initialState: PizzaState =  {
    data: [],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: pizzaActions.PizzasAction
): PizzaState {

    switch(action.type) {
       case(pizzaActions.LOAD_PIZZAS): {
           return {
               ...state,
               loading: true,
           };
       }
       case(pizzaActions.LOAD_PIZZAS_SUCCESS): {
        return {
            ...state,
            loading: false,
            loaded: true
          };
       }
    case(pizzaActions.LOAD_PIZZAS_FAIL): {
        return {
            ...state,
            loading: false,
            loaded: false
          };
       }
    }

  return state;
}
