import React from 'react';
import PropTypes from 'prop-types';
//Components
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

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
    "&:last-child": {
      padding: '0 10px 0 0',
      textAlign: 'end',
    },
  },
  listItemText: {
    textTransform: 'capitalize',
  }
});

function Searchresultitem(props) {
  const { classes, data, selectFunction } = props;
  console.log(selectFunction)
  return(
    <ListItem className={classes.container} onClick={(data) => selectFunction(data)}>
      <img alt={"Image of " + data.food_name} className={classes.icon} src={data.photo.thumb} />
      <ListItemText
        className={classes.listItemText}
        primary={data.food_name}
        secondary={data.hasOwnProperty('brand_name') ? data.brand_name : ''}
      />
    </ListItem>
  );
}

/*
<img alt={"Image of " + data.food_name} className={classes.icon} src={data.thumb} />
      <div className={classes.textContainer}>
        <ListItemText className={classes.listItemText} disableTypography
          primary={<Typography className={classes.textCapitalize} type="body1">{data.food_name}</Typography>}
          secondary={<Typography type="body2" style={{ color: 'grey' }}>{servings}</Typography>}
        />
        <ListItemText className={classes.listItemText} disableTypography
          primary={<Typography type="body1">{calories.toFixed(0) + " cal" }</Typography>}
          secondary={<Typography className={classes.textCapitalize} type="body2" style={{ color: 'grey' }}>{data.meal_type}</Typography>}
        />
      </div>

      <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
*/




Searchresultitem.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  selectFunction: PropTypes.func.isRequired,
};

export default withStyles(styles)(Searchresultitem);



