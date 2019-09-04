import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  avatar: {
    width: '75px',
    height: '75px',
    order: 1,
    [theme.breakpoints.up('md')]: {
      width: '125px',
      height: '125px',
      order: 2,
    }
  },
});

function UserAvatar(props) {

  const { classes } = props;
  
  return(
    <Avatar
      alt="Remy Sharp"
      src="https://images.unsplash.com/photo-1567136047741-f9ba774c74c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80"
      className={classes.avatar}
    />
  )
}

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);

