import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import Header from './components/Header';
import Body from './components/Body';
//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#6200ee',
      },
      secondary: {
          main: '#000000',
      },
  },
});


class App extends Component {
  
  render() {
    return (
      <div className="App" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        height: '100%',
        minHeight: '100vh',
      }}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Body />
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
