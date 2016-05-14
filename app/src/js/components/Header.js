'use strict'

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Glyphicon, Navbar, Nav, NavItem } from 'react-bootstrap'

class Header extends Component {
  handleSelect(selectedKey) {
    console.log('selected ' + selectedKey)
  }

  render() {
    const navbar = (
      <nav>
        <ul>
          <Link to="/">
            <Glyphicon glyph="home"/>&nbsp;Home
          </Link>
          <Link to="/assets">
            <Glyphicon glyph="pencil"/>&nbsp;Assets
          </Link>
          <Link to="/asset/create">
            <Glyphicon glyph="plus"/>&nbsp;Create an asset
          </Link>
        </ul>
      </nav>
    )

    return (
      <header>
        {navbar}
      </header>
    )
  }
}

Header.propTypes = {}

export default Header
