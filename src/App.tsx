import React from 'react'
import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LoginWrapper } from './components/Login/Login'
import { PrivateRoute } from './components/Utils/PrivateRoute'
import { HomeComponent } from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path={'/home'} component={ HomeComponent }/>
          <Route path={'/login'} component={ LoginWrapper } />
          <PrivateRoute path={'*'} component={() => <Redirect to={'/home'}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App