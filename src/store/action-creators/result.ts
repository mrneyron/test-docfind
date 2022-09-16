import {Dispatch} from "redux";
import axios from "axios";
import {ResultAction, ResultActionTypes} from "../../types/result";
import {resultListUrl} from '../../types/result'
import {FilterState} from '../../types/filter';

export const fetchResult = (state: FilterState, limit: number, page: number) => {
  return async (dispatch: Dispatch<ResultAction>) => {
    try {
      dispatch({type: ResultActionTypes.FETCH_RESULT});
      const params = state?.uuid && state?.uuid?.length === 36
        ? {uuid: state.uuid}
        : state?.createRange[0]?.isValid && state?.createRange[1]?.isValid
          ? {
            limit: -1,
            page: 1,
            name: state.name,
          }
          : {
            limit,
            page,
            name: state.name,
            sortBy: state.sort,
            order: state.order,
          }
      const res = await axios.get(resultListUrl, {params})      ;
      
      dispatch({type: ResultActionTypes.FETCH_RESULT_SUCCESS, payload: res.data === null ? [] : res.data})
    } catch (e) {
      dispatch({
        type: ResultActionTypes.FETCH_RESULT_ERROR,
        payload: 'Произошла ошибка при загрузке списка дел'
      })
    }
  }
};

export function setLimit(limit: number): ResultAction {
  return {type: ResultActionTypes.SET_LIMIT, payload: limit}
}

export function setPage(page: number): ResultAction {
  return {type: ResultActionTypes.SET_PAGE, payload: page}
}
