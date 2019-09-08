import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setInspectFood, appendFood, setInspectFocus } from '../../../store/actions';
//Components
import InspectFoodOverview from './InspectFoodOverview';
import InspectFoodServings from './InspectFoodServings';
import InspectFoodMeal from './InspectFoodMeal';
//Material-UI
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

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
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: rgba(0,0,0,0.25);
`

const StyledPaper = styled(Paper)`
  width: calc(100% - 20px);
  max-width: 350px;
  margin: 10px;
  padding: 20px;
`;

const StyledDivLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`

const StyledDivider = styled(Divider)`
  margin: 5px 10px;
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`

class InspectFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servings: "1",
      meal: "",
      servingError: false,
      mealError: false
    };
  };

  //Form setStates
  handleChangeServings = (e) => {
    this.setState({servings: e.target.value});
  }
  handleSelectMeal = (e) => {
    this.setState({meal: e.target.value});
  }

  //Food validation: check before entering food in
  handleAddFood = () => {
    const { inspectFood, appendFood  } = this.props;
    const { servings, meal } = this.state;
    
    //Check and regester errors
    let errors = {
      servingError: false,
      mealError: false
    };

    if (+servings <= 0){
      errors['servingError'] = true;
    }
    if (meal === ""){
      errors['mealError'] = true;
    } 
    
    //If errors cancel add food
    if (errors['servingError'] || errors['mealError']){
      this.setState(errors);
    }
    //No errors, add food
    else {
      appendFood(inspectFood, servings, meal);
      this.setState({servings: "1", meal: "", ...errors});
    }
  } 

  handelCancelInspect = () => {
    this.props.setInspectFood({});
    this.props.setInspectFocus(false);
  }

  render() {
    const { servingError, mealError } = this.state;
    const { inspectFoodFocus, inspectFood } = this.props;
    
    //Check finnished fetching
    let isMountFood = Object.keys(inspectFood).length <= 0 ? false : true;

    return (
      <DivContainer style={inspectFoodFocus ? {} : { display: 'none' } }>
        <BackgroundContainer
          style={inspectFoodFocus? {} : { display: 'none' }}
          onClick={() => { this.handelCancelInspect() }}
        />
        <StyledPaper>
          { isMountFood 
            ?
              <>
                <InspectFoodOverview
                  data={inspectFood}
                  handelCloseWindow={this.handelCancelInspect}
                />
                <StyledDivider />
                <InspectFoodServings
                  data={inspectFood}
                  servings={this.state.servings}
                  setServings={this.handleChangeServings}
                  servingError={servingError}
                />
                <StyledDivider />
                <InspectFoodMeal
                  meal={this.state.meal}
                  setMeal={this.handleSelectMeal}
                  mealError={mealError}
                />
                <StyledButtonContainer>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleAddFood()}
                  > ADD </Button>
                </StyledButtonContainer>
              </>
            :
              <StyledDivLoader >
                <CircularProgress style={{ width: '75px', height: '75px', margin: '50px 25px'}} color="primary" />
              </StyledDivLoader>
          }
        </StyledPaper>
        
      </DivContainer>
    )
  }
}

const mapStateToProps = state => ({
    metaData: state.metaData,
    quickSearchData: state.quickSearchData,
    inspectFoodFocus: state.inspectFoodFocus,
    inspectFood: state.inspectFood,
})

const mapDispatchToProps = dispatch => ({
  setInspectFood: (e) => dispatch(setInspectFood(e)),
  appendFood: (food, servings, meal) => dispatch(appendFood(food, servings, meal)),
  setInspectFocus: (e) => dispatch(setInspectFocus(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(InspectFood);