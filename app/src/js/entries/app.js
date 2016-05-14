'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../modules/app'

render((
  <Router history={ browserHistory } >
    <Route path='/' component={ App } >
      <IndexRoute getComponent={
        (location, callback) => {
          require.ensure([], function(require) {
            callback(null, require('../modules/home').default)
          })
        }
      } />
    </Route>
  </Router>),
  document.getElementById('container'))
