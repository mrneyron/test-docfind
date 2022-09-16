import {FilterAction, FilterActionTypes, FilterState} from "../../types/filter";

const initialState: FilterState = {
  name: '',
  createRange: [null, null],
  uuid: '',
  sort: 'createdAt',
  order: 'desc',
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_NAME:
      return {...state, name: action.payload}
    case FilterActionTypes.SET_CREATE_RANGE:
      return {...state, createRange: action.payload}
    case FilterActionTypes.SET_UUID:
      return {...state, uuid: action.payload}
    case FilterActionTypes.SET_SORT:
      return {...state, sort: action.payload}
    case FilterActionTypes.SET_ORDER:
      return {...state, order: action.payload}
    default:
      return state
  }
}
