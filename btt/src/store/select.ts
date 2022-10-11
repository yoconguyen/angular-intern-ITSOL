import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectstore=createFeatureSelector<any>('posts')
export const selectDataDialogChill = createSelector(selectstore,(state)=>{
    return state.dataDialogChill;
})
export const selectDataDialogCheck = createSelector(selectstore,(state)=>{
    return state.dataDialogCheckbox;
})