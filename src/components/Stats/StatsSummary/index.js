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

function StatsSummary(props) {
  const { classes, goal, sum } = props;
  return(
    <div className={classes.container}>
      <div className={classes.cells}>
        <Typography variant="h5" component="h5">{ sum.toFixed(0) } cal</Typography>
        <Typography variant="body2" component="p" style={{ color: 'grey'}}>consumed</Typography>
      </div>
      <div className={classes.cells}>
        <Typography variant="h5" component="h5">{ goal } cal</Typography>
        <Typography variant="body2" component="p" style={{ color: 'grey'}}>daily goal</Typography>
      </div>
    </div>
  )
}

StatsSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  goal: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default withStyles(styles)(StatsSummary);

