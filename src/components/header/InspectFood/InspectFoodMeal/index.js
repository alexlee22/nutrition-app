import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  container: {
    padding: '10px 0',
  },
  menuTitle: {
    fontWeight: '400',
    color: 'grey',
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    borderRadius: '5px',
  }
});

function InspectFoodMeal(props) {
  const { classes, meal, setMeal, mealError } = props;
  return(
    <div className={classes.container}>
      <Typography varient="overline" className={classes.menuTitle}>ADD TO TODAY</Typography>
      <FormControl
        className={classes.form}
        error={mealError}
      >
        <NativeSelect
          className={classes.input}
          value={meal}
          onChange={(e) => setMeal(e)}
        >
          <option value="">Meal...</option>
          <option value={'breakfast'}>Breakfast</option>
          <option value={'lunch'}>Lunch</option>
          <option value={'dinner'}>Dinner</option>
          <option value={'snack'}>Snack</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}

InspectFoodMeal.propTypes = {
  classes: PropTypes.object.isRequired,
  meal: PropTypes.string.isRequired,
  setMeal: PropTypes.func.isRequired,
  mealError: PropTypes.bool.isRequired
};

export default withStyles(styles)(InspectFoodMeal);