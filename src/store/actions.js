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