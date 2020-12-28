import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './bnb-manage.reducer';
import * as fromBnbManage from './';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(fromBnbManage.bnbManageFeatureKey, reducer)],
})
export class BnbManageStoreModule {}
