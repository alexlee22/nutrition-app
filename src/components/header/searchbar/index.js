import React, { Component } from 'react';
import { connect } from 'react-redux';
import { quickSearchFoods } from '../../../store/actions';

//Components
//Material-UI
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const timeoutDuration = 400;

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      typing: false,
      typingTimeout: 0
    };
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
    //const { classes } = props;
    return(
      <div style={{display: 'flex', zIndex: 10, maxWidth: '400px', backgroundColor: 'white', borderRadius: '5px', padding: '10px', margin: '10px', alignItems: 'center' }}>
        <div style={{ margin: '0 5px 0 0'}}>
          <SearchIcon color="secondary" />
        </div>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          style={{ 'flexGrow': 1 }}
          onChange={(e)=> this.handleSearchChange(e)}
        />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  //...state
})

const mapDispatchToProps = dispatch => ({
//setToggleMenu: () => dispatch(setToggleMenu())
  quickSearchFoods: (e) => dispatch(quickSearchFoods(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);

