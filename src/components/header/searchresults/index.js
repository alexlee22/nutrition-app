import React from 'react';
import PropTypes from 'prop-types';
//Components
import SearchResultsItem from './SearchResultsItem';
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

function SearchResults(props) {
  const { classes, data, searchBarFocus, setInspectFood } = props;
  
  // Check if show item lists
  let visible = false;
  if (data.common.length > 0 || data.branded.length > 0){
    visible = true;
  }
  //Check if grey gradient
  let cover = false;
  if (searchBarFocus || visible) {
    cover = true;
  }
  
  return(
    <div
      className={classes.container}
      style={cover ? {backgroundColor: 'rgba(0,0,0,0.25)'} : {}}
    >
      <Paper className={classes.paper} style={visible ? {} : { display: 'none' }}>
        <List className={classes.root} subheader={<li />}>
          {['common', 'branded'].map(key => (
            <li key={`section-${key}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader className={classes.headings}>{key}</ListSubheader>
                { data[key].filter((d, idx) => idx < 5).map((food, idx) => 
                  <SearchResultsItem key={idx} data={food} setInspectFood={setInspectFood} />
                )}
              </ul>
            </li>
          ))}
        </List>
      </Paper>
    </div>
    
  )
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  searchBarFocus: PropTypes.bool.isRequired,
  setInspectFood: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchResults);








