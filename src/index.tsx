import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { initInterceptor } from './requests/Interceptor'
import { APP_REDUCER_INITIAL_STATE, AppReducer } from './reducers/AppReducer'
import { AppContext } from './constants'


const AppContainer = () => {
  const reducer = React.useReducer(AppReducer, APP_REDUCER_INITIAL_STATE)
  initInterceptor(reducer[1])

  return (
    <AppContext.Provider value={reducer}>
      {reducer && <App />}
    </AppContext.Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <AppContainer/>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
