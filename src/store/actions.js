export const setData = (payload) => dispatch => {
  dispatch({
    type: 'SET_DATA',
    payload: payload
  })
}