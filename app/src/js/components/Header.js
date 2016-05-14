'use strict'

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Glyphicon } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <Glyphicon glyph="home"/>&nbsp;Home
        </Link>
        <Link to="/assets">
          <Glyphicon glyph="pencil"/>&nbsp;Assets
        </Link>
        <Link to="/asset/create">
          <Glyphicon glyph="plus"/>&nbsp;Create an asset
        </Link>
      </header>
    )
  }
}

Header.propTypes = {}

export default Header
