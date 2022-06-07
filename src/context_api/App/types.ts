import { AppContextState } from "./interfaces"
import { SIDEBAR_TOGGLE } from './appTypes.js';


export type AppReducerAction = 
| { type: typeof SIDEBAR_TOGGLE, payload: boolean }

export type AppContextProps = {
    appContext: AppContextState,
    setAppContext: ( {type, payload }: AppReducerAction ) => void
}