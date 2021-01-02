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
  adult$ = this.store.pipe(select(BnbSelectors.getAdult));
  child$ = this.store.pipe(select(BnbSelectors.getChld));

  constructor(private store: Store<State>) {}

  // 宿泊地域の選択
  saveStayCity(city: string) {
    console.log(city);
    this.store.dispatch(BnbActions.saveStayCity({ city }));
  }
  addAdult() {
    this.store.dispatch(BnbActions.addAdult());
  }
  reduceAdult() {
    this.store.dispatch(BnbActions.reduceAdult());
  }
  addChild() {
    this.store.dispatch(BnbActions.addChild());
  }
  reduceChild() {
    this.store.dispatch(BnbActions.reduceChild());
  }
}
