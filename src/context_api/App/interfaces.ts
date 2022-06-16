import { SignUpStepOneFormValue, SignUpStepOneFromData } from "../../components/main/types";

export interface AppProviderProps {
    children: JSX.Element | JSX.Element[]
}

export interface AppContextState {
    sideBarToggle: boolean;
    currentScreen: string;
    signupPayload: SignUpStepOneFormValue & SignUpStepOneFromData | null,
    modalInfo: {
        status: boolean,
        icon: string | null,
        titleHeader: string,
        info: string,
        faintColor: string,
        btnText: string
    }
}

export interface AppContextReducerAction { 
    type: string; 
    payload: any; 
}
