import { MOCK_DATA } from '../mockData.js'

const initialQuickSearch = {
  'branded': [],
  'common': []
}

const initialState = {
  metaData: MOCK_DATA,
  dateIndex: 0,
  quickSearchData: initialQuickSearch,
  inspectFood: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, metaData: action.payload };
    case 'CHANGE_DATE':
      return { ...state, dateIndex: action.payload };
    case 'SET_QUICK_SEARCH_DATA':
      return { ...state, quickSearchData: action.payload };
    case 'SET_INSPECT_FOOD':
      return { ...state, inspectFood: action.payload };
    case 'ADD_FOOD':
      return { 
        ...state,
        metaData: {
          ...state.metaData,
          data_points: state.metaData.data_points.map((d, idx) => {
            if (idx === 0){
              d.intake_list.push(action.payload)
            }
            return d;
          })
        }
      }
    default:
      return state;
  }
}