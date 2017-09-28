import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from './HomePage';

const App = () => (
    <MuiThemeProvider>
        <HomePage />
    </MuiThemeProvider>
);


export default App;
