import React from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { Header, Footer } from 'components'
import {
  Fallback,
  RegisterUser,
  RegisterPurchase,
  ListPurchase
} from 'pages'

export const PrivateRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to="/purchase" />
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

      <Route exact path='/page-not-found' component={() => Fallback("pageNotFound")} />

      <Redirect to="/page-not-found" />
    </Switch>
  )
}