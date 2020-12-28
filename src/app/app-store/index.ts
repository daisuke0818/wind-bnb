import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';

// import { environment } from '@env/environment';

export interface State {}

export const reducers: ActionReducerMap<State> = {};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('action', action);
    console.log('state', result);
    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !false ? [] : [];
