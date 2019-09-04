import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//Components
import User from '../User';
import DateNavigation from '../DateNavigation';
import StatsSummary from './StatsSummary';
import StatsLoadingBar from './StatsLoadingBar';
import StatsMeals from './StatsMeals';
//Material-ui
import Hidden from '@material-ui/core/Hidden';


//LOOSES ON PROPS MANAGEMENT
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media(min-width: 960px){
    max-width: 350px;
    width: 100%;
    background-color: #f5f5f5;
    flex-grow: 1;
  }
`;

class Stats extends Component {

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
        <StatsSummary sum={totalCals} goal={metaData.daily_goal} />
        <StatsLoadingBar progress={(totalCals/metaData.daily_goal)*100} />
        <StatsMeals foodList={metaData.data_points[dateIndex].intake_list} />
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