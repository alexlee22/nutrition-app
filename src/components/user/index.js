import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//Components
import UserAvatar from './UserAvatar';
import UserBubble from './UserBubble';
//Material-ui
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

const StyledContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 10px;

  @media(min-width: 960px){
    width: 100%;
    flex-wrap: wrap;
  }  
`

const StyledNameTypography = styled(Typography)`
  flexGrow: 1
  @media(min-width: 960px){
    width: 100%;
    margin: 10px 0;
    text-align: center;
    order: 4;
  }
`


/*
<Hidden mdUp>
          <DateNavigation />
        </Hidden>
        <Hidden smDown>
            <User />
        </Hidden>
*/


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  };

  render() {
    const { metaData } = this.props;
    return (
      <>
        <StyledContainerDiv>
          <UserAvatar />
          <StyledNameTypography variant="h5" component="h5">
            { metaData.first_name } 
            <Hidden sdDown>
              { " " + metaData.last_name}
            </Hidden>
          </StyledNameTypography>
          <UserBubble label="kg" value={ metaData.weight_kg } />
          <UserBubble label="cm" value={ metaData.height_cm } />
        </StyledContainerDiv>
        <Hidden sdDown>
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
