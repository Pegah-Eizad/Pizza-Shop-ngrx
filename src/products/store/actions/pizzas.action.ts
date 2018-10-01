import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

//things that can happen when we load the pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

//action creators
export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: any) {}
}

export const CREATE_PIZZA = '[Products] Create Pizzas';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';

export class CreatePizza implements Action {
    readonly type = CREATE_PIZZA;
    constructor(public payload: Pizza) {}
}
export class CreatePizzaFail implements Action {
    readonly type = CREATE_PIZZA_FAIL;
    constructor(public payload: any) {}
}
export class CreatePizzaSuccess implements Action {
    readonly type = CREATE_PIZZA_SUCCESS;
    constructor(public payload: Pizza) {}
}

//action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess 
 | CreatePizza | CreatePizzaFail | CreatePizzaSuccess;