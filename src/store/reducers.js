import { MOCK_DATA } from '../mockData.js'

const initialState = {
  metaData: MOCK_DATA,
  dateIndex: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, metaData: action.payload };
    case 'CHANGE_DATE':
      return { ...state, dateIndex: action.payload };
    default:
      return state
  }
}
