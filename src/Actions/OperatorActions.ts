import { AppReducerAction, AppReducerState } from '../reducers/AppReducer'

const handleToggleCalling = (state: AppReducerState): AppReducerState => ({...state, isCalling: !state.isCalling})
export const toggleCalling = (): AppReducerAction => ({ handler: handleToggleCalling})