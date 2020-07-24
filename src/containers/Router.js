import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'
import Events from '../pages/events'
import Members from '../pages/members'

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
      </Switch>
    </BrowserRouter>
  )
}

export default Router
