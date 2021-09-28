import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Fallback } from '../pages/Fallbacks'
import { Login } from '../pages/Login'
import { ListPurchase } from '../pages/Purchase/List/ListPurchase'
import { RegisterPurchase } from '../pages/Purchase/Register'
import { RegisterUser } from '../pages/User/Register'

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login'>
          <Header />
          <Login />
        </Route>
        
        <Route exact path='/purchase'>
          <Header />
          <ListPurchase />
        </Route>

        <Route path='*/register'>
          <Footer />
          <Route exact path='/register' component={RegisterUser} />
          <Route exact path='/purchase/register' component={RegisterPurchase} />
        </Route>
        
        <Route exact path='/page-not-found' component={() => <Fallback page="pageNotFound" />}/>
        
        <Route exact path='/'>
          <Redirect to="/login" /> 
        </Route>

        {/** Redirect to error page */}
        <Redirect to="/page-not-found" /> 
      </Switch>
    </BrowserRouter>
  )
}