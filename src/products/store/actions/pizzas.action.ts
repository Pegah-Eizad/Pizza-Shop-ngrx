import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

//things that can happen when we load the pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

//action creators
export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
    constructor(public payload: any) {}
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: any) {}
}

//action types
export type PizzaAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;