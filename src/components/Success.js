import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {

        return (
            <MuiThemeProvider>
                <>
                    <AppBar title='Successfully submitted' />
                    <h1>Thank you for submission</h1>
                </>
            </MuiThemeProvider>
        );
    }
}

export default Success;
