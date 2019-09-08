import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
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
    margin: '10px 0',
    backgroundColor: '#300076',
    order: 3,
    [theme.breakpoints.up('md')]: {
      backgroundColor: grey[600],
      margin: '0',
      order: 1,
    },
    "&:last-child": {
      margin: '10px',
      order: 3,
      [theme.breakpoints.up('md')]: {
        margin: '0',
      },
    }
  },
  typography: {
    color: 'white',
    lineHeight: '1em',
  }
});

function UserBubble(props) {
  const { classes, label, value } = props;
  return(
    <div className={classes.bubble}>
      <Typography className={classes.typography} variant="h5">{value}</Typography>
      <Typography className={classes.typography} variant="body2">{label}</Typography>
    </div>
  )
}

UserBubble.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default withStyles(styles)(UserBubble);

