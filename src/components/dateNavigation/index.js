import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDate } from '../../store/actions';
import styled from 'styled-components'
// Components
import Navbutton from './navbutton';
// Material-ui
import Typography from '@material-ui/core/Typography';

const DivContainer = styled.div`
  width: 100%;
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: noWrap;
  justify-content: space-between;
  align-items: center;
`

class DateNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  };

  render() {
    const { metaData, dateIndex, changeDate } = this.props;
    
    //Dummy Data: calculate date
    let date = new Date()
    date.setDate(date.getDate() - dateIndex)
    let dateFormat;
    switch(dateIndex) {
      case 0:
        dateFormat = "Today";
        break;
      case 1:
        dateFormat = "Yesterday";
        break;
      default:
        //CHANGE TO dd MMM
        dateFormat = date.toLocaleDateString("en-US");
    }
    

    return (
      <DivContainer>
        <Navbutton direction="back" index={dateIndex} noOfDays={metaData.data_points.length} eventOnClick={changeDate} />
        <Typography variant="h4" component="h4">{ dateFormat }</Typography>
        <Navbutton direction="forwards" index={dateIndex} noOfDays={metaData.data_points.length} eventOnClick={changeDate} />
      </DivContainer>
    )
  }

}


const mapStateToProps = state => ({
    metaData: state.metaData,
    dateIndex: state.dateIndex,
})

const mapDispatchToProps = dispatch => ({
  changeDate: (e) => dispatch(changeDate(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(DateNavigation);