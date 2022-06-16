import { AppContextState } from "./interfaces"
import { SIDEBAR_TOGGLE, CURRENT_SCREEN, SiGN_UP_PAYLOAD, MODAL_INFO } from './appTypes.js';
import { SignUpStepOneFormValue, SignUpStepOneFromData } from "../../components/main/types";


export type AppReducerAction = 
| { type: typeof SIDEBAR_TOGGLE, payload: boolean }
| { type: typeof CURRENT_SCREEN, payload: string }
| { type: typeof SiGN_UP_PAYLOAD, payload:  any}
| { type: typeof MODAL_INFO, payload:  any}

export type AppContextProps = {
    appContext: AppContextState,
    setAppContext: ( {type, payload }: AppReducerAction ) => void
}