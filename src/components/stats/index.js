import React, { Component } from 'react';
import { connect } from 'react-redux';
import Summary from './summary';
import LoadingBar from './loadingbar';
import Meals from './meals';
//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  };

  render() {
    const { metaData, dateIndex } = this.props;
    console.log(metaData)
    let totalCals = metaData.data_points[dateIndex].intake_list.reduce((total, d) => total + (d.serving_size / d.serving_qty) * d.nf_calories, 0);
    console.log(totalCals)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
        <Summary sum={totalCals} goal={metaData.daily_goal} />
        <LoadingBar progress={(totalCals/metaData.daily_goal)*100} />
        <Meals foodList={metaData.data_points[dateIndex].intake_list} />
      </div>
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