import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot, RouterState } from '../../../../node_modules/@angular/router';

export interface RouterStateURL {
    url: string;
    queryParams: Params;
    params: Params;
}

export interface State {
   routerReducer: fromRouter.RouterReducerState
}

//type it as ActionReducerMap, type State
export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
};

//call it as a fn
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateURL>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateURL>{
    serialize(routerState: RouterStateSnapshot): RouterStateURL {
        const { url } = routerState;
        const { queryParams } = routerState.root;
       
        //router is a state tree
        let state: ActivatedRouteSnapshot = routerState.root;
        //iterate the state tree (state tree of angular's router), binding 
        //it to our ngrx store
        while (state.firstChild) {
            state = state.firstChild;
        }

        const { params } = state;
        
        //new state representation of where we are in the application
        return { url, queryParams, params };
    }
}