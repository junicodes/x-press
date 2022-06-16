import { useReducer, createContext, useContext } from 'react';
import { AppContextState, AppProviderProps } from './interfaces';
import { reducer } from './reducer';
import { AppContextProps } from './types';

//Object Shared State Default Store
let INITIAL_STATE: AppContextState = {
  sideBarToggle: true,
  currentScreen: 'sign-up',
  signupPayload: null,
  modalInfo: {
    status: false,
    icon: null,
    titleHeader: "",
    info: "",
    faintColor: "",
    btnText: ""
  }
};

//Create context here
const AppContext = createContext<AppContextProps>({} as AppContextProps);

//Set context info
export const AppProvider = ({ children }: AppProviderProps) => {
  const [appContext, setAppContext] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider
      value={{
        appContext,
        setAppContext
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Export the context state
export const useAppContext = () => useContext(AppContext);

//the above ia just a way of simplyfying things so that in the respective components you can just type useAppContext()
//instead of setting the usecontext again