import { Action, createReducer, on } from '@ngrx/store';
import * as BnbActions from './bnb-manage.actions';

export const bnbManageFeatureKey = 'bnbManage';

export interface State {
  city: string | undefined;
  adult: number;
  child: number;
}

export const initialState: State = {
  city: '',
  adult: 1,
  child: 0,
};

const bnbManageReducer = createReducer(
  initialState,
  on(BnbActions.saveStayCity, (state, { city }) => ({
    ...state,
    city,
  })),
  on(BnbActions.addAdult, (state) => ({
    ...state,
    adult: state.adult + 1,
  })),
  on(BnbActions.reduceAdult, (state) => ({
    ...state,
    adult: state.adult - 1,
  })),
  on(BnbActions.addChild, (state) => ({
    ...state,
    child: state.child + 1,
  })),
  on(BnbActions.reduceChild, (state) => ({
    ...state,
    child: state.child - 1,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return bnbManageReducer(state, action);
}
