import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import Product from './product';
//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';



class Foods extends Component {

  render() {
    const { metaData, dateIndex } = this.props;
    console.log(metaData.data_points[dateIndex].intake_list)
    return (
      <List style={{ width: "100%"}}>
        { metaData.data_points[dateIndex].intake_list.map((data, idx) => 
          <Product key={idx} data={data} />
        )}
      </List>
      
      
    )
  }
}


/*
<List>
      <ListItem>
        <ListItemAvatar>
          <div></div>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>

          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>

          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
*/

const mapStateToProps = state => ({
    metaData: state.metaData,
    dateIndex: state.dateIndex
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Foods);