'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { createAssets } from '../redux/actions'

class Create extends Component {
  render() {
    return (
      <div className="create-asset">
        { /* todo: ASSET FORM */ }
      </div>
    )
  }
}

Create.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Create)
