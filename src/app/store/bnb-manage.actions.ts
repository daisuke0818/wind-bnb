// action

import { createAction, props } from '@ngrx/store';

// 【全機能共通】・通信を開始する
export const saveStayCity = createAction('[Dialog] Save Stay City', props<{ city: string }>());
