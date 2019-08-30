import { MOCK_DATA } from '../mockData.js'

const initialState = {
  metaData: MOCK_DATA
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, metaData: action.payload };
    default:
      return state
  }
}
