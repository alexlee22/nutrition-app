import { MOCK_DATA } from '../mockData.js'

const initialQuickSearch = {
  'branded': [],
  'common': []
}

const initialState = {
  metaData: MOCK_DATA,
  dateIndex: 1,
  quickSearchData: initialQuickSearch
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, metaData: action.payload };
    case 'CHANGE_DATE':
      return { ...state, dateIndex: action.payload };
    case 'SET_QUICK_SEARCH_DATA':
        return { ...state, quickSearchData: action.payload };
    default:
      return state
  }
}
