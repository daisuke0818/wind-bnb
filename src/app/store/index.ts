import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// import { environment } from '@e';

import * as fromBnbManage from './bnb-manage.reducer';

export const bnbManageFeatureKey = 'bnbManage';

export interface State {
  [fromBnbManage.bnbManageFeatureKey]: fromBnbManage.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromBnbManage.bnbManageFeatureKey]: fromBnbManage.reducer,
};

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export { fromBnbManage };
