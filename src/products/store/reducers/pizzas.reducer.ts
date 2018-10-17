import * as pizzaActions from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
    entities: { [id: number]: Pizza},
    loaded: boolean,
    loading: boolean
}

export const initialState: PizzaState =  {
    entities: {},
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
         const pizzas = action.payload;
         const entities = pizzas.reduce((entities: {[id: number]: Pizza}, pizza: Pizza) => {
          return {
            ...entities, 
            [pizza.id] : pizza };
         }, 
         {
           ...state.entities
         });
        return {
            ...state,
            loading: false,
            loaded: true,
            entities
          };
       }
      case(pizzaActions.LOAD_PIZZAS_FAIL): {
        return {
            ...state,
            loading: false,
            loaded: false
          };
       }
      case (pizzaActions.UPDATE_PIZZA_SUCCESS):
      case (pizzaActions.CREATE_PIZZA_SUCCESS): {
          const pizza = action.payload;
          const entities = {
              ...state.entities,
              [pizza.id]: pizza
          };
          return {
              ...state,
              entities
          };
      }

      case (pizzaActions.REMOVE_PIZZA_SUCCESS): {
          const pizza = action.payload;
          const { [pizza.id]: removed, ...entities } = state.entities; //remove by destructuring
          return {
              ...state,
              entities
          };
      }
    }

  return state;
}

//fn accepts state
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;