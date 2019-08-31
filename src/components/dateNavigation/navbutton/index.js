import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = theme => ({
  icon: {
    width: '20px',
    height: '20px',
  },
});


function Navbutton(props) {
  const { classes, direction, index, noOfDays, eventOnClick } = props;
  if (direction === "back"){
    return(
      <ArrowBackIosIcon
        className={classes.icon}
        color={ noOfDays > index+1 ? "primary" : "disabled" }
        onClick={ () => { if (noOfDays > index+1){ eventOnClick(index+1) }} }
      />
    )
  }
  //Return ">" icon
  else if (direction === "forwards") {
    return(
      <ArrowForwardIosIcon
        className={classes.icon}
        color={ 0 < index ? "primary" : "disabled" }
        onClick={ () => { if (0 < index){ eventOnClick(index-1) }} }
      />
    )
  }
  
}



Navbutton.propTypes = {
  classes: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  noOfDays: PropTypes.number.isRequired,
  eventOnClick: PropTypes.func.isRequired


};

export default withStyles(styles)(Navbutton);



