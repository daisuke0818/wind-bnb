// reducer

import { Action, createReducer, on } from '@ngrx/store';
import * as BnbActions from './bnb-manage.actions';

export const bnbManageFeatureKey = 'bnbManage';

export interface State {
  city: string | undefined;
}

export const initialState: State = {
  city: undefined,
};

const bnbManageReducer = createReducer(
  initialState,
  on(BnbActions.saveStayCity, (state, { city }) => ({
    ...state,
    city,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return bnbManageReducer(state, action);
}
