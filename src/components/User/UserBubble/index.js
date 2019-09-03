import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';
import { isUserWhitespacable } from '@babel/types';

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
    [theme.breakpoints.up('md')]: {
      backgroundColor: grey[600],
      order: 1,
    },
    "&:last-child": {
      order: 3,
    }
  },
  typography: {
    color: 'white',
  }
});

function UserBubble(props) {
  const { classes, label, value } = props;
  return(
    <div className={classes.bubble}>
      <Typography className={classes.typography} variant="h5" component="h5">{value}</Typography>
      <Typography className={classes.typography} variant="h6" component="h6">{label}</Typography>
    </div>
  )
}

UserBubble.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default withStyles(styles)(UserBubble);

