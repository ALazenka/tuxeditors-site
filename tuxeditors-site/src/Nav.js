import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './Nav.css';

const Nav = () => (
    <div id="nav">
        <div id="nav-logo">
            TUXEDitOrs LOGO
        </div>
        <div className="nav-button">
            About Us
        </div>
        <div className="nav-button">
            Source Code
        </div>
        <div className="nav-button">
            Conceptual Architecture
        </div>
        <div className="nav-button">
            Concrete Architecture
        </div>
        <div className="nav-button">
            Proposal
        </div>
    </div>

);

export default Nav;


