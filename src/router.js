import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './components/Home'
import About from './components/About'

const router = (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
)

export default router
