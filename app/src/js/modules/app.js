'use strict'

import React, { Component, PropTypes } from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AppReducer from '../redux/reducers'
import Header from '../components/Header'
import Footer from '../components/Footer'

let store = applyMiddleware(thunk)(createStore)(AppReducer)

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="app">
          <Header />
          <div id="content">
            { this.props.children }
          </div>
          <Footer />
        </div>
      </Provider>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
