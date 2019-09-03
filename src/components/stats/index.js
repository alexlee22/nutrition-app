import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//Components
import User from '../User';
import DateNavigation from '../dateNavigation';
import Summary from './summary';
import LoadingBar from './loadingbar';
import Meals from './meals';
//Material-ui
import Hidden from '@material-ui/core/Hidden';


//LOOSES ON PROPS MANAGEMENT
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 20px;
  @media(min-width: 960px){
    max-width: 350px;
    width: 100%;
  }
`;

class Stats extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { metaData, dateIndex } = this.props;
    let totalCals = metaData.data_points[dateIndex].intake_list.reduce((total, d) => total + (d.serving_size / d.serving_qty) * d.nf_calories, 0);
    return (
      <DivContainer>
        <Hidden mdUp>
          <DateNavigation />
        </Hidden>
        <Hidden smDown>
          <User />
        </Hidden>
        <Summary sum={totalCals} goal={metaData.daily_goal} />
        <LoadingBar progress={(totalCals/metaData.daily_goal)*100} />
        <Meals foodList={metaData.data_points[dateIndex].intake_list} />
      </DivContainer>
    )
  }
}

const mapStateToProps = state => ({
    metaData: state.metaData,
    dateIndex: state.dateIndex
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats);