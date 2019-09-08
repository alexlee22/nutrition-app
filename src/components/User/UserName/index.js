import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    flexGrow: 1,
    order: 2,
    margin: '0 10px',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      margin: '10px 0',
      textAlign: 'center',
      order: 4,
    }
  },
});

function UserName(props) {
  const { classes, first_name, last_name } = props;
  return(
    <div className={classes.container}>
      <Hidden mdUp>
        <Typography variant="h5" component="h5">
          { first_name }
        </Typography>
      </Hidden>
      <Hidden smDown>
        <Typography variant="h5" component="h5">
          { first_name } { last_name }
        </Typography>
      </Hidden>
    </div>
  )
}

UserName.propTypes = {
  classes: PropTypes.object.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
};

export default withStyles(styles)(UserName);

