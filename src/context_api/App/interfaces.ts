
export interface AppProviderProps {
    children: JSX.Element | JSX.Element[]
}

export interface AppContextState {
    sideBarToggle: boolean;
}

export interface AppContextReducerAction { 
    type: string; 
    payload: any; 
}
