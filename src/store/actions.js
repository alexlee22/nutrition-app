const nutritionAppID = "<NUTRITIONIX APPLICATION ID>";
const nutritionAppKey = "<NUTRITIONIX APP KEY>";
const nutritionInstantURL = "https://trackapi.nutritionix.com/v2/search/instant";
const nutritionDetailGeneric = "https://trackapi.nutritionix.com/v2/natural/nutrients";
const nutritionDetailBranded = "https://trackapi.nutritionix.com/v2/search/item";

//Sets the metadata (old function)
export const setData = (payload) => dispatch => {
  dispatch({
    type: 'SET_DATA',
    payload: payload
  })
}

//Swap dates using the DateNavigation component
export const changeDate = (payload) => dispatch => {
  dispatch({
    type: 'CHANGE_DATE',
    payload: payload
  })
}

//Toggle action for focusing/unfocusing search bar
export const setSearchFocus = (payload) => dispatch => {
  dispatch({
    type: 'SEARCHBAR_FOCUS',
    payload: payload
  })
}

//Reset parameters when search cancel
export const setSearchDefocus = (payload) => dispatch => {
  console.log('actions')
  dispatch({
    type:'SEARCHBAR_DEFOCUS',
    payload: payload
  })
}

//Retrieve a quick list of data to populate the autofill, based on search string
export const quickSearchFoods = (payload) => dispatch => {
  //When empty, set no search items
  if (payload === ''){
    dispatch({
      type: 'SET_QUICK_SEARCH_DATA',
      payload: { 'common': [], 'branded': [] }
    });
  }
  //Fetch
  else {
    let configBody = { "query": payload };
    let configHeaders = {
      'x-app-id': nutritionAppID,
      'x-app-key': nutritionAppKey,
      'Content-Type': 'application/json'
    };
    fetch(nutritionInstantURL, {
      method: 'POST',
      body: JSON.stringify(configBody),
      headers: configHeaders
    })
    .then((res) => {
      return res.json();
    })
    .then((myJSON) => {
      dispatch({
        type: 'SET_QUICK_SEARCH_DATA',
        payload: myJSON
      });
    });
  }
}

//Get data from selected food using the nutrition data url
export const setInspectFood = (payload) => dispatch => {

  let configHeaders = {
    'x-app-id': nutritionAppID,
    'x-app-key': nutritionAppKey,
    'Content-Type': 'application/json'
  };

  //Branded
  if (payload.hasOwnProperty('nix_item_id')) {
    fetch(nutritionDetailBranded + "?nix_item_id=" + payload.nix_item_id, {
      method: 'GET',
      headers: configHeaders
    })
    .then((res) => {
      return res.json();
    })
    .then((myJSON) => {
      dispatch({
        type: 'SET_INSPECT_FOOD',
        payload: myJSON.foods[0]
      });
    });
  }
  //Non-Branded
  else if (payload.hasOwnProperty('food_name')) {
    let configBody = { "query": payload.food_name };
    fetch(nutritionDetailGeneric, {
      method: 'POST',
      body: JSON.stringify(configBody),
      headers: configHeaders
    })
    .then((res) => {
      return res.json();
    })
    .then((myJSON) => {
      dispatch({
        type: 'SET_INSPECT_FOOD',
        payload: myJSON.foods[0]
      });
    });
  }
  //Clean fields (for closing app)
  else {
    dispatch({
      type: 'SET_INSPECT_FOOD',
      payload: {}
    });
  }
}

//Add food to list of Todays consumption
export const appendFood = (food, servings, meal) => dispatch => {
  let compiledFood = {
    "food_name": food.food_name,
    "serving_unit": food.serving_unit,
    "serving_weight_grams": food.serving_weight_grams,
    "serving_qty": food.serving_qty,
    "nf_calories": food.nf_calories,
    "serving_size" : Number(servings),
    "meal_type": meal,
    "thumb": food.photo.thumb
  }
  //Add branded if exists
  if (food.nix_item_id) {
    compiledFood["nix_item_id"] = food.nix_item_id
  }
  dispatch({
    type: 'ADD_FOOD',
    payload: compiledFood
  });
}
