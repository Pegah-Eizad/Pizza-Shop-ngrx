import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { Params } from '../../../../node_modules/@angular/router';

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