import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../user';
//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Hidden from '@material-ui/core/Hidden';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  };

  render() {
  
    return (
      <>
        <AppBar position='relative' style={{boxShadow:'none', display: 'flex', justifyContent: 'center',}} >
          <div style={{display: 'flex', maxWidth: '400px', backgroundColor: 'white', borderRadius: '5px', padding: '10px', margin: '10px', alignItems: 'center' }}>
            <div style={{ margin: '0 5px 0 0'}}>
              <SearchIcon color="secondary" />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ 'flexGrow': 1 }}
            />
          </div>
          <Hidden mdUp>
            <User />
          </Hidden>
        </AppBar>
      </>
    )
  }

}




const mapStateToProps = state => ({
    //...state
})

const mapDispatchToProps = dispatch => ({
  //setToggleMenu: () => dispatch(setToggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);