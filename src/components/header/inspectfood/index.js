import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//import quickSearchFoods from '../../store/actions';

//Material-UI
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

const DivContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  background-color: rgba(0,0,0,0.25);
`

const StyledPaper = styled(Paper)`
  
  border: dotted red 1px;
  width: calc(100% - 20px);
  height: 200px;
`


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  };


  render() {
    const { inspectFood } = this.props;
    let visible = true;
    if (Object.keys(inspectFood).length <= 0){
      visible = false
    }
    return (
      <DivContainer style={visible ? {} : { display: 'none' } }>
        <StyledPaper>
          asd
        </StyledPaper>
      </DivContainer>
    )
    
  }
}




const mapStateToProps = state => ({
    metaData: state.metaData,
    quickSearchData: state.quickSearchData,
    inspectFood: state.inspectFood,
})

const mapDispatchToProps = dispatch => ({
  //setToggleMenu: () => dispatch(setToggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);