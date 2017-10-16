import React, { Component } from 'react';
import { Nav, Navbar, MenuItem, NavDropdown } from 'react-bootstrap';


import './Navigation.css';

class Navigation extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
              <Navbar.Brand>
                  TUXEDitOrs
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav>
                  <MenuItem eventKey={1} href="/">Home</MenuItem>
                  <MenuItem eventKey={2} href="discussions">Weekly Discussions</MenuItem>
                  <MenuItem eventKey={3} href="http://www.github.com/ALazenka/tuxeditors-site">Source Code</MenuItem>
                  <NavDropdown eventKey={4} title="Architecture" id="basic-nav-dropdown">
                      <MenuItem eventKey={4.1} href="conceptual">Conceptual</MenuItem>
                      <MenuItem eventKey={4.2} href="concrete">Concrete</MenuItem>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;


