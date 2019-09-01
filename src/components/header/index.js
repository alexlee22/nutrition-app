import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInspectFood } from '../../store/actions';

//Components
import User from '../user';
import Searchbar from './searchbar';
import Searchresults from './searchresults';
import Inspectfood from './inspectfood';
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

  handleAction = () => {
    console.log('handledActon')
  }

  render() {
    const { quickSearchData, setInspectFood } = this.props;
    return (
      <>
        <AppBar position='relative' style={{boxShadow:'none', display: 'flex', justifyContent: 'center', zIndex: 10}} >
          <Searchbar  />
          <Hidden mdUp>
            <User />
          </Hidden>
        </AppBar>
        <Searchresults data={quickSearchData} searchAction={setInspectFood}  />
        <Inspectfood />
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
  setInspectFood: (e) => dispatch(setInspectFood(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);