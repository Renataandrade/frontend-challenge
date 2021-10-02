import React from 'react'
import { useAppSelector } from 'store/hooks'
import { 
  BrowserRouter as Router, 
  Redirect, 
  Route, 
  Switch 
} from 'react-router-dom'
import { Header } from 'components'
import { Login } from 'pages'
import { PrivateRoutes } from './private'

export const Routes = (): JSX.Element => {
  const { isAuthenticated } = useAppSelector(
    (state) => state.auth
  )

  return (
    <Router>
        {!isAuthenticated ? (
          <Switch>
            <Route exact path='/login'>
              <Header />
              <Login />
            </Route>
            
            <Redirect to="/login" /> 
          </Switch> 
        ): (
          <PrivateRoutes />
        )}
    </Router>
  )
}