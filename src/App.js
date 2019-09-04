import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setData } from './store/actions';
import styled from 'styled-components'; 
//Components
import Header from './components/Header';
import Body from './components/Body';
//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media(min-width: 960px){
    flex-direction: row;
    flex-wrap: noWrap;
  }
`;

const theme = createMuiTheme({
  palette: {
      primary: {
          main: deepPurple['A700'],
      },
      secondary: {
          main: '#000000',
      },
  },
});


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
          <Body />
        </MuiThemeProvider>
      </div>
    );
  }
}

//<p onClick={() => this.props.setData("asd")}>{this.props.metaData.first_name}</p>

const mapStateToProps = state => ({
  //searchList: state.searchList,
  
  //filteredData: searchFilterData(state)
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
