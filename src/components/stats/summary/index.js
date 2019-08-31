import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    width: '100%',
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  cells: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    "&:last-child": {
      textAlign: 'end',
    }
  },
});

function Summary(props) {
  const { classes, goal, sum } = props;
  return(
    <div className={classes.container}>
      <div className={classes.cells}>
        <Typography variant="h4" component="h4">{ sum.toFixed(0) } cal</Typography>
        <Typography variant="subtitle1" component="p">consumed</Typography>
      </div>
      <div className={classes.cells}>
        <Typography variant="h4" component="h4">{ goal } cal</Typography>
        <Typography variant="subtitle1" component="p">daily goal</Typography>
      </div>
    </div>
  )
}

Summary.propTypes = {
  classes: PropTypes.object.isRequired,
  goal: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default withStyles(styles)(Summary);

