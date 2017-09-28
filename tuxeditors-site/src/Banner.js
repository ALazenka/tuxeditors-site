import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './Banner.css';

const Banner = () => (
    <div id="banner">
        <h1 id="title">TUXEDitOrs</h1>
        <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dui eget leo
            fermentum elementum in eu lectus.
        </h2>
        <div id="action-buttons">
            <RaisedButton label="Check it out!"/>
        </div>

    </div>

);

export default Banner;




