// action

import { createAction, props } from '@ngrx/store';

// 【全機能共通】・通信を開始する
export const saveStayCity = createAction('[Dialog] Save Stay City', props<{ city: string }>());

export const addAdult = createAction('[Dialog] Add Adult');
export const reduceAdult = createAction('[Dialog] Reduce Adult');

export const addChild = createAction('[Dialog] Add Child');
export const reduceChild = createAction('[Dialog] Reduce Child');
