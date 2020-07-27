import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'
import Events from '../pages/events'
import Members from '../pages/members'
import Subscribed from '../pages/subscribed'
import Verify from '../pages/verify'
import Debug from '../pages/debug'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
        <Route path="/subscribed">
          <Subscribed />
        </Route>
        <Route path="/verify">
          <Verify />
        </Route>
        <Route path="/debug">
          <Debug />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
