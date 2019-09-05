import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//Components
import Header from './components/Header';
import Body from './components/Body';
//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  min-height: 100vh;
`

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
      <StyledApp >
        <MuiThemeProvider theme={theme}>
          <Header />
          <Body />
        </MuiThemeProvider>
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
