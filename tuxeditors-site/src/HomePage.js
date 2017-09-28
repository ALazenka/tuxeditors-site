import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from './Nav';
import Banner from './Banner';
import CommitList from './CommitList';

const HomePage = () => (
    <div>
        <Nav />
        <Banner />
        <CommitList />
    </div>
);


export default HomePage;
