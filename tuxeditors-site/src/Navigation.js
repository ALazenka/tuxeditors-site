import React, { Component } from 'react';
import { Nav, Navbar, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
                <LinkContainer exact to="/"><MenuItem eventKey={1}>Home</MenuItem></LinkContainer>
                <LinkContainer to="/discussions"><MenuItem eventKey={2}>Weekly Discussions</MenuItem></LinkContainer>
                <MenuItem eventKey={3} href="http://www.github.com/ALazenka/tuxeditors-site">Source Code</MenuItem>
                <NavDropdown eventKey={4} title="Architecture" id="basic-nav-dropdown">
                    <LinkContainer to="/conceptual"><MenuItem eventKey={4.1}>Conceptual</MenuItem></LinkContainer>
                    <LinkContainer to="/concrete"><MenuItem eventKey={4.2}>Concrete</MenuItem></LinkContainer>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;


