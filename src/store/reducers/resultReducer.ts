import {ResultAction, ResultActionTypes, ResultState} from "../../types/result";

const initialState: ResultState = {
  result: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
}

export const resultReducer = (state = initialState, action: ResultAction): ResultState => {
  switch (action.type) {
    case ResultActionTypes.FETCH_RESULT:
      return {...state, loading: true}
    case ResultActionTypes.FETCH_RESULT_SUCCESS: 
      return {...state, loading: false, result: action.payload}
    case ResultActionTypes.FETCH_RESULT_ERROR:
      return {...state, loading: false, error: action.payload}
    case ResultActionTypes.SET_LIMIT:
      return {...state, limit: action.payload}
    case ResultActionTypes.SET_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}
