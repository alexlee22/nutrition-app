import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setData } from './store/actions';
//import { searchFilterData } from '../store/selector';
//Components
import Header from './components/header';
import Stats from './components/stats';
import Foods from './components/foods';
//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
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
          <Stats />
          <Foods />
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
