import React from 'react';
import PropTypes from 'prop-types';
//Components
import Searchresultitem from './searchresultitem';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  container: {
    width:'100vw',
    height: '100vh',
    position: 'absolute',
    top: '70px',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  paper: {
    width: 'calc(100% - 20px)',
    maxWidth: '450px',
    maxHeight: 'calc(100% - 70px - 10px)',
    margin: '0 auto',
    overflow: 'scroll',
  },
  listSection: {
  },
  ul: {
    padding: 0,
    backgroundColor: '#FFFFFF',
  },
  headings: {
    textTransform: 'uppercase',
  }
});

function Searchresults(props) {
  const { classes, data, setInspectFood } = props;
  
  let visible = false;
  if (data.common.length > 0 || data.branded.length > 0){
    visible = true;
  }

  return(
    <div className={classes.container} style={visible ? {} : { display: 'none' }} >
      <Paper className={classes.paper} >
        <List className={classes.root} subheader={<li />}>
          {['common', 'branded'].map(key => (
            <li key={`section-${key}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader className={classes.headings}>{key}</ListSubheader>
                { data[key].filter((d, idx) => idx < 5).map((food, idx) => 
                  <Searchresultitem key={idx} data={food} setInspectFood={setInspectFood} />
                )}
              </ul>
            </li>
          ))}
        </List>
      </Paper>
    </div>
    
  )
}



/*
<List className={classes.root} subheader={<li />}>
        {[0, 1].map(sectionId => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map(item => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>

*/



Searchresults.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  setInspectFood: PropTypes.func.isRequired
};

export default withStyles(styles)(Searchresults);








