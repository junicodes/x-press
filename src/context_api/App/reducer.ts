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
        default:
          throw new Error(`Unknown action: ${action.type}`);
      }
  };