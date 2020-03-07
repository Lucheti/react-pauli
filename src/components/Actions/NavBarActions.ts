import { AppReducerAction, AppReducerState } from '../../reducers/AppReducer'

const handleChangeTab = (state: AppReducerState, action: AppReducerAction) => ({ ...state, openTab: state.openTab.tab(action.payload) })
export const changeTab = (identifier: string): AppReducerAction => ({ payload: identifier , handler: handleChangeTab})

const handleToggleNavbar = (state: AppReducerState ) => ({ ...state, navbarVisible: !state.navbarVisible })
export const toggleNavbar = (): AppReducerAction => ({ handler: handleToggleNavbar })