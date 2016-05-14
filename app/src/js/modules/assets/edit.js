'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { editAssets } from '../redux/actions'

class Edit extends Component {
  render() {
    return (
      <div className="edit-asset">
        { /* todo: ASSET FORM */ }
      </div>
    )
  }
}

Edit.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Edit)
