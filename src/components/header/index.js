import React, { Component } from 'react';
import { connect } from 'react-redux';
//import quickSearchFoods from '../../store/actions';
import User from '../user';
//Components
import Searchbar from './searchbar';
import Searchresults from './searchresults';
//Material-UI
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  };

  render() {
    const { quickSearchData } = this.props;
    return (
      <>
      <AppBar position='relative' style={{boxShadow:'none', display: 'flex', justifyContent: 'center', zIndex: 10}} >
        <Searchbar  />
        <Hidden mdUp>
          <User />
        </Hidden>
      </AppBar>
      <Searchresults searchAction={quickSearchData} data={quickSearchData} />
      </>
    )
  }
}




const mapStateToProps = state => ({
    //...state
    quickSearchData: state.quickSearchData,
})

const mapDispatchToProps = dispatch => ({
  //setToggleMenu: () => dispatch(setToggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);