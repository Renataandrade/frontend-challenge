import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/login' />
        <Route exact path='/register' />
        <Route exact path='/purchase' />
        <Route exact path='/purchase/register' />
        <Route exact path='/page-not-found' />
        
        <Route exact path='/'>
          <Redirect to="/login" /> 
        </Route>

        {/** Redirect to error page */}
        <Redirect to="/page-not-found" /> 
      </Switch>
    </BrowserRouter>
  )
}