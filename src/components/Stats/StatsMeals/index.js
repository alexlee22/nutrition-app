import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const MEAL_CATEGORY = ['breakfast', 'lunch', 'dinner', 'snack']

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cells: {
    width: (100 / MEAL_CATEGORY.length).toString() + "%",
    textAlign: 'center',
  },
  mealCategory: {
    textTransform: 'capitalize',
    color: 'grey',
  }
});

function calcTotal(data, filter) {
  let filtered_list = data.filter((d) => d.meal_type === filter);
  return filtered_list.reduce((total, d) => total + (d.serving_size / d.serving_qty) * d.nf_calories, 0);
}

function StatsMeals(props) {
  const { classes, foodList } = props;
  return(
    <div className={classes.container}>
      { MEAL_CATEGORY.map((cate, idx) => 
        <div key={idx} className={classes.cells}> 
          <Typography variant="h5" component="h5">{ calcTotal(foodList, cate).toFixed(0) }</Typography>
          <Typography variant="body2" component="p" className={classes.mealCategory} >{ cate }</Typography>
        </div>
      )}
    </div>
  )
}
        
StatsMeals.propTypes = {
  classes: PropTypes.object.isRequired,
  foodList: PropTypes.array.isRequired,
};

export default withStyles(styles)(StatsMeals);



