import React from 'react';
import PropTypes from 'prop-types';
//Components
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  container: {
    padding: '10px 0',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'top' 
  },
  thumbnailIcon: {
    width: '75px',
    height: '75px',
  },
});


function InspectFoodOverview(props) {
  const { classes, data, handelCloseWindow } = props;
  return(
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <img className={classes.thumbnailIcon} src={data.photo.thumb} alt="Food Thumbnail"/>
        <CloseIcon color="primary" onClick={() => handelCloseWindow()} />
      </div>
      <Typography variant="h4" style={{textTransform: 'capitalize'}}>{data.food_name}</Typography>
      <Typography variant="subtitle1" style={{color: 'grey'}}>{data.brand_name}</Typography>
  </div>
  );
}

InspectFoodOverview.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handelCloseWindow: PropTypes.func.isRequired,
};

export default withStyles(styles)(InspectFoodOverview);



