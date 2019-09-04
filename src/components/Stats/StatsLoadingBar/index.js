import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    width: '100%',
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  loadingBar: {
    width: '100%',
  },
  percentageText: {
    textAlign: 'end',
  }
  
});

function StatsLoadingBar(props) {
  const { classes, progress } = props;
  return(
    <div className={classes.container}>
      <LinearProgress className={classes.loadingBar} color="primary" variant="determinate" value={progress > 100 ? 100 : progress} />
      
      <div style={{ display: 'flex', wrap: 'nowrap' }}>
        <div style={ progress > 1 ? { flexGrow: (progress + ((progress - 50) * 0.05)).toFixed(0)  } : {} }></div>
        <Typography style={ progress > 0 && progress < 100 ? { flexGrow: 1 } : {} } variant="subtitle2" component="p">{ progress.toFixed(0) }%</Typography>
        <div style={ progress < 99 ? { flexGrow: ((100 - progress - ((progress - 50) * 0.05))).toFixed(0) } : {} }></div>
      </div>
    </div>
  )
}

StatsLoadingBar.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
};

export default withStyles(styles)(StatsLoadingBar);



