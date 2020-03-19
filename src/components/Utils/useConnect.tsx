import React, { Dispatch } from 'react'
import {
  AppReducerAction,
  AppReducerState,
} from '../../reducers/AppReducer'
import { AppContext } from '../../index'

interface Props {
  state: AppReducerState ,
  dispatch:React.Dispatch<AppReducerAction>
}

export const useConnect = <T extends any> (Component: React.FC<Props & T>): React.FC<T> => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state,dispatch] = React.useContext(AppContext)
    return <Component state={state} dispatch={dispatch} {...props} />
}
