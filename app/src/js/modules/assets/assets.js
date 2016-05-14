'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { fetchAssets } from '../redux/actions'

class Assets extends Component {
  render() {
    return (
      <div className="assets">
        { /* todo: ASSETS TABLE */ }
      </div>
    )
  }
}

Assets.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Assets)
