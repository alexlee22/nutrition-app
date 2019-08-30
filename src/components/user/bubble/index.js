import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  bubble: {
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75px',
    height: '75px',
    backgroundColor: deepPurple[700],
    [theme.breakpoints.up('sm')]: {
      backgroundColor: grey[600],
    }
  },
  measurement: {

  },
  numeracy: {
    
  }
});

function Bubble(props) {
  const { classes, label, value } = props;
  console.log(props);
  return(
    <div className={classes.bubble}>
      <Typography variant="h5" component="h5">{value}</Typography>
      <Typography variant="h6" component="h6">{label}</Typography>
    </div>
  )
}

Bubble.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default withStyles(styles)(Bubble);

