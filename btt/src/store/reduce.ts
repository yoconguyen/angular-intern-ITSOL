import { sendDataDialog, sendDataDialogCheckbox } from "./action";

export function postreducer(state = [], action: any) {
  switch (action.type) {
    case sendDataDialog:
      return { ...state, dataDialogChill: action.payload };
    case sendDataDialogCheckbox:
      return{...state, dataDialogCheckbox: action.payload }  
      default:
      return state;
  }
}