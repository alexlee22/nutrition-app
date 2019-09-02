import React from 'react';
import PropTypes from 'prop-types';
//Components
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'top' ,
  },
  textField: {
    width: '40%',
    margin: 0,
  },
  statsContainer: {
    "&:last-child": {
      textAlign: 'end',
    }
  }
  
});


function InspectFoodServings(props) {
  const { classes, data, servings,  setServings } = props;
  let calories, grams;

  if (Number(servings)){
    //Check if it is less than 0 (can't devide by 0)
    calories = servings > 0 ? (servings / data.serving_qty) * data.nf_calories : 0;
    if (data.hasOwnProperty('serving_weight_grams')){
      grams = data.serving_weight_grams * servings;
    }
  }
  console.log(calories, grams)

  return(
    <div className={classes.container}>
      <TextField
        id="filled-number"
        label="Number"
        value={servings}
        onChange={(e) => setServings(e)}
        type="number"
        InputLabelProps={{ shrink: true }}
        margin="normal"
        variant="filled"
        helperText={data.serving_unit}
        className={classes.textField}
      />
      
        <div className={classes.statsContainer}>
          <Typography variant="h4">{grams ? grams.toFixed(0) : '-'}</Typography>
          <Typography variant="subtitle1" style={{color: 'grey'}}>grams</Typography>
        </div>
      
      
        <div className={classes.statsContainer}>
          <Typography variant="h4">{calories ? calories.toFixed(0) : '-'}</Typography>
          <Typography variant="subtitle1" style={{color: 'grey'}}>calories</Typography>
        </div>
      
      
      
    </div>
  );
}

InspectFoodServings.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  servings: PropTypes.string.isRequired,
  setServings: PropTypes.func.isRequired,
};

export default withStyles(styles)(InspectFoodServings);



