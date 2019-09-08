import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInspectFood, setSearchDefocus, setInspectFocus } from '../../store/actions';
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

  handelSubmitItems = (data) => {
    Promise.resolve(this.props.setInspectFocus(true))
      .then(() => {this.props.setInspectFood(data);});
  }

  render() {
    const { quickSearchData, searchBarFocus, setSearchDefocus } = this.props;
    
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
        
          <SearchResults data={quickSearchData} searchBarFocus={searchBarFocus} setInspectFood={this.handelSubmitItems} setSearchDefocus={setSearchDefocus}  />
          <InspectFood />
        </StyledAppBar>
      </>
    )
  }
}




const mapStateToProps = state => ({
  quickSearchData: state.quickSearchData,
  searchBarFocus: state.searchBarFocus,
})

const mapDispatchToProps = dispatch => ({
  setInspectFood: (e) => dispatch(setInspectFood(e)),
  setSearchDefocus: () => dispatch(setSearchDefocus()),
  setInspectFocus: (e) => dispatch(setInspectFocus(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);