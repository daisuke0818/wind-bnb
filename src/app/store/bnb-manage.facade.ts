import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './bnb-manage.reducer';
import * as BnbSelectors from './bnb-manage.selector';
import * as BnbActions from './bnb-manage.actions';

@Injectable({
  providedIn: 'root',
})
export class BnbManageFacde {
  // 読み込んでいるかの状態
  city$ = this.store.pipe(select(BnbSelectors.getSelectedCity));

  constructor(private store: Store<State>) {}

  // 宿泊地域の選択
  saveStayCity(city: string) {
    this.store.dispatch(BnbActions.saveStayCity({ city }));
  }
}
