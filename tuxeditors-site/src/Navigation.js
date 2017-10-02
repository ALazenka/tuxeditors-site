import React, { Component } from 'react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


import './Navigation.css';

const Navigation = () => (
    <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">TUXEDitOrs</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <MenuItem eventKey={1} href="#discussions">Weekly Discussions</MenuItem>
                <MenuItem eventKey={2} href="http://www.github.com/ALazenka/tuxeditors-site">Source Code</MenuItem>
                <NavDropdown eventKey={3} title="Architecture" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} href="#conceptual">Conceptual</MenuItem>
                    <MenuItem eventKey={3.2} href="#concrete">Concrete</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <MenuItem eventKey={1} href="#contact">Contact Us</MenuItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;


