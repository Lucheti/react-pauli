import {
  AppReducerAction,
  AppReducerPayloadAction,
  AppReducerPlainAction,
  AppReducerState
} from '../reducers/AppReducer'

const handleChangeTab = (state: AppReducerState, action: AppReducerPayloadAction<string>) => ({ ...state, openTab: state.openTab.tab(action.payload) })
export const changeTab = (identifier: string): AppReducerPayloadAction<string> => ({ payload: identifier , handler: handleChangeTab})

const handleToggleNavbar = (state: AppReducerState ) => ({ ...state, navbarVisible: !state.navbarVisible })
export const toggleNavbar = (): AppReducerPlainAction => ({ handler: handleToggleNavbar })

const handleLogout = (state: AppReducerState ): AppReducerState => {
  localStorage.clear()
  return {...state, access_token: ''}
}
export const logout = (): AppReducerPlainAction => ({handler: handleLogout})