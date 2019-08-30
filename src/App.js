import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setData } from './store/actions';
//import { searchFilterData } from '../store/selector';

import Header from './components/header';
import deepPurple from '@material-ui/core/colors/deepPurple';
import User from './components/user';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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
        </MuiThemeProvider>
      </div>
    );
  }
}

//<p onClick={() => this.props.setData("asd")}>{this.props.metaData.first_name}</p>

const mapStateToProps = state => ({
  //searchList: state.searchList,
  metaData: state.metaData
  //filteredData: searchFilterData(state)
});

const mapDispatchToProps = dispatch => ({
  setData: (e) => dispatch(setData(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
