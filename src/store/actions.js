const nutritionAppID = "";
const nutritionAppKey = "";
const nutritionInstantURL = "https://trackapi.nutritionix.com/v2/search/instant";
const nutritionDetailGeneric = "https://trackapi.nutritionix.com/v2/natural/nutrients";
const nutritionDetailBranded = "https://trackapi.nutritionix.com/v2/search/item";

export const setData = (payload) => dispatch => {
  dispatch({
    type: 'SET_DATA',
    payload: payload
  })
}

export const changeDate = (payload) => dispatch => {
  dispatch({
    type: 'CHANGE_DATE',
    payload: payload
  })
}

export const quickSearchFoods = (payload) => dispatch => {
  // When empty, set no search items
  if (payload === ''){
    console.log('none')
    dispatch({
      type: 'SET_QUICK_SEARCH_DATA',
      payload: { 'common': [], 'branded': [] }
    });
  }
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
      console.log(myJSON)
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
  //Clean
  else {
    dispatch({
      type: 'SET_INSPECT_FOOD',
      payload: {}
    });
  }
}

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
