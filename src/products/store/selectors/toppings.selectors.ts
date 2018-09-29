import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as toppingsReducer from '../reducers/toppings.reducer';

/*this selector allows us to access different levels of our state tree,
accessing multiple properties on different levels and combining them
and pass them as observables to our component*/

//selector importing data structure of the store
export const getToppingsState = createSelector(
    fromFeature.getProductState,
    (state: fromFeature.ProductsState) => state.toppings
);

//selector referencing topping entities
//this is used to compose the other selectors
export const getToppingEntities = createSelector(
    getToppingsState,
    toppingsReducer.getToppingEntities
);

//map over the entities and return each entity by its ID
export const getAllToppings = createSelector(
    getToppingEntities,
    entities => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
);
//Object.keys returns a string array so must use parseInt

export const getToppingsLoaded = createSelector(
    getToppingsState,
    toppingsReducer.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
    getToppingsState,
    toppingsReducer.getToppingsLoading
);