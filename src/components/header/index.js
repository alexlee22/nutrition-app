import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInspectFood } from '../../store/actions';

//Components
import DateNavigation from '../dateNavigation';
import User from '../User';
import Searchbar from './searchbar';
import Searchresults from './searchresults';
import InspectFood from './InspectFood';

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
    const { inspectFood, quickSearchData, setInspectFood } = this.props;

    //Check if need to show InspectFoods
    let mountInspectFood = Object.keys(inspectFood).length <= 0 ? false : true;

    return (
      <>
        <AppBar position='relative' style={{boxShadow:'none', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'10px', zIndex: 10}} >
          <Searchbar  />
          <Hidden mdUp>
            <User />
          </Hidden>
          <Hidden smDown>
            <DateNavigation />
          </Hidden>
        
        <Searchresults data={quickSearchData} setInspectFood={setInspectFood}  />
        
        
        { mountInspectFood &&
          <InspectFood />
        }
        </AppBar>
      </>
    )
  }
}




const mapStateToProps = state => ({
  inspectFood: state.inspectFood,
  quickSearchData: state.quickSearchData,
})

const mapDispatchToProps = dispatch => ({
  //setToggleMenu: () => dispatch(setToggleMenu())
  setInspectFood: (e) => dispatch(setInspectFood(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);