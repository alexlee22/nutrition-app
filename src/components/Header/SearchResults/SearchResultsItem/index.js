import React from 'react';
import PropTypes from 'prop-types';
//Components
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    padding: 0,
  },
  icon: {
    width: '45px',
    height: '45px',
    margin: '10px 15px 10px 10px',
    borderRadius: '10px',
  },
  textContainer: {
    display: 'flex',
    padding: '5px 0',
    flexGrow: 1,
    borderBottom: '1px solid grey',
  },
  listItemText: {
    textTransform: 'capitalize',
    "&:last-child": {
      padding: '0 10px 0 0',
    },
  },
});

function SearchResultItem(props) {
  const { classes, data, setInspectFood } = props;
  return(
    <ListItem button className={classes.container} onClick={() => setInspectFood(data)}>
      <img alt={"Image of " + data.food_name} className={classes.icon} src={data.photo.thumb} />
      <ListItemText
        className={classes.listItemText}
        primary={data.food_name}
        secondary={data.hasOwnProperty('brand_name') ? data.brand_name : ''}
      />
    </ListItem>
  );
}

SearchResultItem.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  setInspectFood: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchResultItem);