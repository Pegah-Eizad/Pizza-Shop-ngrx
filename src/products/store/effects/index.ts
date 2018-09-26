import { PizzasEffects } from './pizzas.effect';
import { ToppingsEffects } from './toppings.effect';

//create an array of effects
export const effects: any [] = [PizzasEffects, ToppingsEffects];

export * from './pizzas.effect';
export * from './toppings.effect';