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
    position: 'absolute',
    top: '70px',
    width: 'calc(100% - 20px)',
    maxHeight: 'calc(100% - 70px - 10px)',
    margin: '0 10px',
    zIndex: 12,
    overflow: 'scroll',
  },
  root: {
    margin: '10px',
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
  const { classes, data, searchAction } = props;
  console.log(searchAction)
  let visible = false;
  if (data.common.length > 0 || data.branded.length > 0){
    visible = true;
  }

  return(
    <Paper className={classes.container} style={visible ? {} : { display: 'none' } }>
      <List className={classes.root} subheader={<li />}>
        {['common', 'branded'].map(key => (
          <li key={`section-${key}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader className={classes.headings}>{key}</ListSubheader>
              { data[key].filter((d, idx) => idx < 5).map((food, idx) => 
                <Searchresultitem key={idx} data={food} selectFunction={searchAction} />
              )}
            </ul>
          </li>
        ))}
      </List>
    </Paper>
    
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
  searchAction: PropTypes.func.isRequired
};

export default withStyles(styles)(Searchresults);








