import { AppContextState } from './interfaces.js';
import { SIDEBAR_TOGGLE } from './appTypes.js';
import { AppReducerAction } from './types.js';
  
  
  //Reducer to change state
  export const reducer = (state: AppContextState, action:  AppReducerAction) => {
      switch (action.type) {
        case 'SIDEBAR_TOGGLE':
          return {
            ...state, 
            sideBarToggle: action.payload 
          };
        case 'CURRENT_SCREEN':
          return {
            ...state, 
            currentScreen: action.payload 
          };
        case 'SiGN_UP_PAYLOAD':
          return {
            ...state, 
            signupPayload: action.payload 
          };
        case 'MODAL_INFO':
          return {
            ...state, 
            modalInfo: action.payload 
          };
        default:
          throw new Error(`Unknown action: ${action.type}`);
      }
  };