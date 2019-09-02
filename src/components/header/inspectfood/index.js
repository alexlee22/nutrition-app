import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setInspectFood, appendFood } from '../../../store/actions';
//Components
import InspectFoodOverview from './InspectFoodOverview';
import InspectFoodServings from './InspectFoodServings';
//Material-UI
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { flexbox } from '@material-ui/system';

const DivContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  background-color: rgba(0,0,0,0.25);
`;

const StyledPaper = styled(Paper)`
  width: calc(100% - 20px);
`;

const StyledDivider = styled(Divider)`
  margin: 5px 10px;
`

class InspectFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servings: "0",
      meal: ""
    };
  };

  handleChangeServings = (e) => {
    this.setState({servings: e.target.value});
  }

  handleSelectMeal = (e) => {
    this.setState({meal: e.target.value});
  }

  handleAddFood = () => {
    const { inspectFood, appendFood  } = this.props;
    const { servings, meal } = this.state;
    appendFood(inspectFood, servings, meal);
  } 

  render() {
    const { inspectFood, setInspectFood, appendFood } = this.props;
    
    //Check visibility
    let visible = true;
    if (Object.keys(inspectFood).length <= 0){
      return (<></>)
    }

    return (
      <DivContainer style={visible ? {} : { display: 'none' } }>
        <StyledPaper>
          <InspectFoodOverview
            data={inspectFood}
            setInspectFood={setInspectFood}
          />
          
          <StyledDivider />
          
          <InspectFoodServings
            data={inspectFood}
            servings={this.state.servings}
            setServings={this.handleChangeServings}
          />

          <StyledDivider />

          <div style={{padding: '10px'}}>
            <Typography varient="overline" style={{fontWeight: '400', color: 'grey'}}>ADD TO TODAY</Typography>
            <FormControl style={{width: '100%'}}>
              <NativeSelect
                style={{width: '100%', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.09)', borderRadius: '5px'}}
                value={this.state.meal}
                onChange={(e) => this.handleSelectMeal(e)}
              >
                <option value="">Meal...</option>
                <option value={'breakfast'}>Breakfast</option>
                <option value={'lunch'}>Lunch</option>
                <option value={'dinner'}>Dinner</option>
                <option value={'snack'}>Snack</option>
              </NativeSelect>
            </FormControl>
          </div>

          <div style={{display: 'flex', justifyContent: 'flex-end', padding: '10px'}}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleAddFood()}
            >
              ADD
            </Button>
          </div>
          
        </StyledPaper>
        
      </DivContainer>
    )
    
  }
}




const mapStateToProps = state => ({
    metaData: state.metaData,
    quickSearchData: state.quickSearchData,
    inspectFood: state.inspectFood,
})

const mapDispatchToProps = dispatch => ({
  setInspectFood: (e) => dispatch(setInspectFood(e)),
  appendFood: (food, servings, meal) => dispatch(appendFood(food, servings, meal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InspectFood);