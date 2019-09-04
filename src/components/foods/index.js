import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import FoodProduct from './FoodProduct';
//Material-UI
import List from '@material-ui/core/List';

class Foods extends Component {
  render() {
    const { metaData, dateIndex } = this.props;
    return (
      <List style={{ width: "100%"}}>
        { metaData.data_points[dateIndex].intake_list.map((data, idx) => 
          <FoodProduct key={idx} data={data} />
        )}
      </List>
    )
  }
}

const mapStateToProps = state => ({
    metaData: state.metaData,
    dateIndex: state.dateIndex
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Foods);