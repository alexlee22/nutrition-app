import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDate } from '../store/actions';
//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class DateNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  };

  render() {
    const { metaData, dateIndex } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    )
  }

}


const mapStateToProps = state => ({
    metaData: state.metaData,
    dateIndex: state.dateIndex
})

const mapDispatchToProps = dispatch => ({
  changeDate: (e) => dispatch(changeDate(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(DateNavigation);