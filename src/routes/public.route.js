import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Home } from '../containers'
import { withMainLayout } from '../layout'

export const PublicRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path={'/'}
        component={withMainLayout(Home)}
      />
      <Redirect to="/" />
    </Switch>
  )
}
