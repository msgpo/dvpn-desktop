import * as React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { RouteDef } from '../../app.types'
import { providerRoutes } from '../../../provider/provider.routes'
import { NAV_TERMS, NAV_WELCOME } from '../../app.links'
import AppHeader from '../AppHeader/AppHeader'
import Terms from '../../pages/Terms/Terms'
import Welcome from '../../pages/Welcome/Welcome'
import ConnectionHistory from '../ConnectionHistory/ConnectionHistory'

const mainRoutes: RouteDef[] = [...providerRoutes]

const Main = () => (
  <div>
    <AppHeader />
    <ConnectionHistory />
    {mainRoutes.map(route => {
      return <Route exact key={route.path} path={route.path} component={route.component} />
    })}
  </div>
)
const App = () => (
  <div>
    <Switch>
      <Redirect exact path="/" to={NAV_WELCOME} />
      <Route exact key={NAV_WELCOME} path={NAV_WELCOME} component={Welcome} />
      <Route exact key={NAV_TERMS} path={NAV_TERMS} component={Terms} />
      <Main />
    </Switch>
  </div>
)

export default withRouter(App)
