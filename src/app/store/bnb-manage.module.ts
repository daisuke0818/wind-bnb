// manage-module

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { bnbManageFeatureKey, reducer } from './bnb-manage.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ [bnbManageFeatureKey]: reducer })],
  exports: [],
})
export class BnbManageModule {}
