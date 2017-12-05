import React, { Component } from 'react';
import BannerLogo from './BannerLogo';

import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div id="banner">
                <h1 id="title">TUXEDitOrs</h1>
                <BannerLogo />
                <h2>
                    Students who edit and discuss about SuperTux -- in style.
                </h2>
            </div>
        );
    }
}

export default Banner;




