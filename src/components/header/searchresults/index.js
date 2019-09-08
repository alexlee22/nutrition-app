import React from 'react';
import PropTypes from 'prop-types';
//Components
import SearchResultsItem from './SearchResultsItem';
//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  container: {
    width: '100vw',
    height: 'calc(100vh - 70px)',
    position: 'absolute',
    top: '70px',
  },
  background: {
    width: '100vw',
    height: 'calc(100vh - 70px)',
    position: 'absolute',
  },
  paper: {
    width: 'calc(100% - 20px)',
    maxWidth: '450px',
    maxHeight: 'calc(100% - 10px)',
    margin: '0 auto',
    overflowY: 'scroll',
  },
  root: {
    paddingBottom: 0,
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
  const { classes, data, searchBarFocus, setInspectFood, setSearchDefocus } = props;
  
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
      style={cover ? {} : { display: 'none' }}
    >
      <div
        className={classes.background}
        style={cover ? {backgroundColor: 'rgba(0,0,0,0.25)'} : { display: 'none' }} 
        onClick={() => { if(cover === true){ setSearchDefocus()} }}
      />
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
  setInspectFood: PropTypes.func.isRequired,
  setSearchDefocus: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchResults);








