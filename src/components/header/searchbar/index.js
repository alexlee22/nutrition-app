import React, { Component } from 'react';
import { connect } from 'react-redux';
import { quickSearchFoods, setSearchFocus } from '../../../store/actions';
import styled from 'styled-components';
//Material-UI
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const timeoutDuration = 400;

const StyledDivContainer = styled.div`
  display: flex;
  min-height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const StyledDivSearchBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  margin: 10px;
`

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      typing: false,
      typingTimeout: 0
    };
    this.searchBarRef = React.createRef();
  };

  handleSearchChange = (e) => {
    const self = this;
    if (self.state.typingTimeout) {
       clearTimeout(self.state.typingTimeout);
    }
    self.setState({
       searchValue: e.target.value,
       typing: false,
       typingTimeout: setTimeout(function () {
           self.props.quickSearchFoods(self.state.searchValue);
         }, timeoutDuration)
    });
  }

  render() {
    const { dateIndex, quickSearchData, searchBarFocus, setSearchFocus } = this.props;

    //If grey cover needed
    let cover = false;
    if (searchBarFocus || quickSearchData.common.length > 0 || quickSearchData.branded.length > 0) {
      cover = true;
    }

    return(
      <StyledDivContainer
        style={cover ? {backgroundColor: 'rgba(0,0,0,0.25)'} : {}}
      >
        <StyledDivSearchBar>
          <div style={{ margin: '0 5px 0 0'}}>
            <SearchIcon color="secondary" style={{margin: '10px'}}  />
          </div>
          <InputBase
            ref={this.searchBarRef}
            disabled={dateIndex == 0 ? false : true}
            placeholder="Search foods…"
            inputProps={{ 'aria-label': 'search' }}
            style={{ color: 'black', flexGrow: 1 }}
            onChange={(e)=> this.handleSearchChange(e)}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
        </StyledDivSearchBar>
      </StyledDivContainer>
    )
  }
}

const mapStateToProps = state => ({
  dateIndex: state.dateIndex,
  quickSearchData: state.quickSearchData,
  searchBarFocus: state.searchBarFocus,
})

const mapDispatchToProps = dispatch => ({
  setSearchFocus: (e) => dispatch(setSearchFocus(e)),
  quickSearchFoods: (e) => dispatch(quickSearchFoods(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);

