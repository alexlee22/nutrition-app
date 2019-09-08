import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInspectFood, setSearchDefocus } from '../../store/actions';
import styled from 'styled-components';
//Components
import DateNavigation from '../DateNavigation';
import User from '../User';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import InspectFood from './InspectFood';

//Material-UI
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';


const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

class Header extends Component {

  render() {
    const { inspectFood, quickSearchData, searchBarFocus, setInspectFood, setSearchDefocus } = this.props;
    let mountInspectFood = Object.keys(inspectFood).length <= 0 ? false : true;
    return (
      <>
        <StyledAppBar position='relative'>
          <SearchBar />
          
          <Hidden mdUp>
            <User />
          </Hidden>
          <Hidden smDown>
            <DateNavigation />
          </Hidden>
        
          <SearchResults data={quickSearchData} searchBarFocus={searchBarFocus} setInspectFood={setInspectFood} setSearchDefocus={setSearchDefocus}  />
          <InspectFood mountInspectFood={mountInspectFood} />
        </StyledAppBar>
      </>
    )
  }
}




const mapStateToProps = state => ({
  inspectFood: state.inspectFood,
  quickSearchData: state.quickSearchData,
  searchBarFocus: state.searchBarFocus,
})

const mapDispatchToProps = dispatch => ({
  setInspectFood: (e) => dispatch(setInspectFood(e)),
  setSearchDefocus: () => dispatch(setSearchDefocus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);