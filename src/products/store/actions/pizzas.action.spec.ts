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

    describe('LoadPizzas Actions', () => {
        describe('LoadPizzas', () => {
            it('should create an action', () => {
                const payload = { message: 'Load Error'};
                const action = new pizzaActions.LoadPizzasFail(payload);

                expect({...action}).toEqual({
                    type: pizzaActions.LOAD_PIZZAS_FAIL,
                    payload
                });
            });
        });
    });
});