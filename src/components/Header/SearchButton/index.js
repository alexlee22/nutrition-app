import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '20px',
    zIndex: 0,
  },
  extendedIcon: {
    margin: '10px',
  },
});

function SearchButton(props) {
  const { classes, isFocused, focusFunction, defocusFunction } = props;
  return(
    <Fab
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={() => { 
        if(isFocused){
          defocusFunction()
        }
        else {
          focusFunction()
        }}}
    >
      <AddIcon />
    </Fab>
  );
}

SearchButton.propTypes = {
  classes: PropTypes.object.isRequired,
  isFocused: PropTypes.bool.isRequired,
  focusFunction: PropTypes.func.isRequired,
  defocusFunction: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchButton);