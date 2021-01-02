import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, bnbManageFeatureKey } from './bnb-manage.reducer';

const getState = createFeatureSelector<State>(bnbManageFeatureKey);

export const getSelectedCity = createSelector(getState, (state) => state.city);
export const getAdult = createSelector(getState, (state) => state.adult);
export const getChld = createSelector(getState, (state) => state.child);
