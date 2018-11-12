import * as pizzaActions from './pizzas.action';

describe('Pizzas Actions', () => {

    describe('LoadPizzas Actions', () => {
        describe('LoadPizzas', () => {
            it('should create an action', () => {
                const action = new pizzaActions.LoadPizzas();

                expect({...action}).toEqual({
                    type: pizzaActions.LOAD_PIZZAS,
                });
            });
        });
    });
});