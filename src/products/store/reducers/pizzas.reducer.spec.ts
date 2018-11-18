import * as pizzasReducer from './pizzas.reducer';
import * as pizzasActions from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

describe('PizzasReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const { initialState } = pizzasReducer;
            const action = {} as any;
            const state = pizzasReducer.reducer(undefined, action);

            expect(state).toBe(initialState);
        })
    });
    describe('LOAD_PIZZAS action', () => {
        it('should set loading to true', () => {
            const { initialState } = pizzasReducer;
            const action = new pizzasActions.LoadPizzas();
            const state = pizzasReducer.reducer(initialState, action);

            expect(state.entities).toEqual({});
            expect(state.loaded).toEqual(false);
            expect(state.loading).toEqual(true);
        })
    });
})