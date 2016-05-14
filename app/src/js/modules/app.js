'use strict'

import React, { Component, PropTypes} from 'react'
import $ from 'jquery'

class App extends Component {
  render() {
    return (
      <div id="content">
        { this.props.children }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
