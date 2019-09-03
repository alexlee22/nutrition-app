import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Avatar from './avatar';
import Bubble from './bubble';
//Material-ui
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  };

  render() {
    const { metaData } = this.props;
    console.log(metaData)
    return (
      <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
        <Avatar />
        <Typography style={{ flexGrow: 1 }} variant="h5" component="h5">
          { metaData.first_name }
          <Hidden mdDown>
              { metaData.last_name}
          </Hidden>
        </Typography>
        <Bubble label="kg" value={ metaData.weight_kg } />
        <Bubble label="cm" value={ metaData.height_cm } />
      </div>
    )
  }

}


const mapStateToProps = state => ({
    metaData: state.metaData 
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
