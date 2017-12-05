import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Page from './Page';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Page />
            </MuiThemeProvider>
        );
    }
}


export default App;
