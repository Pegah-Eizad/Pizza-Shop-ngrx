import * as pizzaActions from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
    data: Pizza[],
    loaded: boolean,
    loading: boolean
}

export const initialState: PizzaState =  {
    data: [ { //temp data for now
        "name": "Seaside Surfin'",
        "toppings": [
          {
            "id": 6,
            "name": "mushroom"
          },
          {
            "id": 7,
            "name": "olive"
          },
          {
            "id": 2,
            "name": "bacon"
          },
          {
            "id": 3,
            "name": "basil"
          },
          {
            "id": 1,
            "name": "anchovy"
          },
          {
            "id": 8,
            "name": "onion"
          },
          {
            "id": 11,
            "name": "sweetcorn"
          },
          {
            "id": 9,
            "name": "pepper"
          },
          {
            "id": 5,
            "name": "mozzarella"
          }
        ],
        "id": 2
      }
    ],
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
