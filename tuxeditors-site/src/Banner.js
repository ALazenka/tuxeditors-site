import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BannerLogo from './BannerLogo';

import './Banner.css';

const Banner = () => (
    <div id="banner">
        <h1 id="title">TUXEDitOrs</h1>
        <BannerLogo />
        <h2>
            Students who edit and discuss about SuperTux -- in style.</h2>
        <div id="action-buttons">
            <RaisedButton href="#contact" label="Contact Us"/>
        </div>

    </div>

);

export default Banner;




