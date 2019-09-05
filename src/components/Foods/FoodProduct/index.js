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
  textCapitalize: {
    textTransform: 'capitalize',
  }
});

function FoodProduct(props) {
  const { classes, data } = props;
  
  let calories = ((data.serving_size / data.serving_qty) * data.nf_calories);
  let grams, servings;
  if (data.hasOwnProperty('serving_weight_grams')){
    grams = "("+ (data.serving_weight_grams * data.serving_size).toFixed(0) + " g)";
    servings = [data.serving_size.toString(), data.serving_unit, grams].join(" ");  
  } else {
    servings = [data.serving_size.toString(), data.serving_unit].join(" ");  
  }
  
  return(
    <ListItem className={classes.container}>
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
    </ListItem>
  );
}

FoodProduct.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(FoodProduct);



