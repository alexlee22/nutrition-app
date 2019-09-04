import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//Components
import UserAvatar from './UserAvatar';
import UserBubble from './UserBubble';
import UserName from './UserName';
//Material-ui
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

const StyledContainerDiv = styled.div`
  width: 100%; 
  max-width: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  @media(min-width: 960px){
    flex-wrap: wrap;
  }  
`

class User extends Component {

  render() {
    const { metaData } = this.props;
    return (
      <>
        <StyledContainerDiv>
          <UserAvatar />
          <UserName first_name={metaData.first_name} last_name={metaData.last_name} />
          <UserBubble label="kg" value={ metaData.weight_kg } />
          <UserBubble label="cm" value={ metaData.height_cm } />
        </StyledContainerDiv>
        <Hidden smDown>
          <Divider />
        </Hidden>
      </>
    )
  }

}



const mapStateToProps = state => ({
    metaData: state.metaData 
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
