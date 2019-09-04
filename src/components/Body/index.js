import React from 'react';
import PropTypes from 'prop-types';
//Components
import Stats from '../Stats';
import Foods from '../Foods';
//Material-UI
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display:'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      flexGrow: 1,
    }
  },
});

function Body(props) {
  const { classes } = props;
  return(
    <div className={classes.container}>
      <Stats />
      <Foods />
    </div>
  )
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);

