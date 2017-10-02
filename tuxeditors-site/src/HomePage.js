import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navigation from './Navigation';
import Banner from './Banner';
import CommitList from './CommitList';

const HomePage = () => (
    <div>
        <Navigation />
        <Banner />
        <CommitList />
        <h3 id="discussions">Weekly Discussions</h3>
        <h4>Meeting #1 - Sept 28:</h4>
        <p>Discussed website design and layout. Git and version control was taught to unfamiliar members.</p>
        <h3 id="code">Source Code</h3>
        <p>Coming soon!</p>
        <h3 id="conceptual">Conceptual Architecture</h3>
        <p>Coming soon!</p>
        <h3 id="concrete">Concrete Architecture</h3>
        <p>Coming soon!</p>
        <h3 id="contact">Contact Us</h3>
        <p>Andrew Lazenka</p>
        <p>Hyun Heo (10073578 / 12hh13@queensu.ca)</p>
        <p>Renée Rosario</p>
        <p>Rory Bell</p>
        <p>Simon Pan</p>
        <p>Noam McGregor</p>
    </div>
);


export default HomePage;
