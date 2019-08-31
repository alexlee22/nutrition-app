const nutritionInstantURL = "https://trackapi.nutritionix.com/v2/search/instant";


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
  console.log(payload)
  if (payload === ''){
    console.log('none')
    dispatch({
      type: 'SET_QUICK_SEARCH_DATA',
      payload: { 'common': [], 'branded': [] }
    });
  }
  else {
    let configBody = { "query": "cheese" };
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


