export const resultListUrl = "https://63243de9bb2321cba927d530.mockapi.io/docs";
//export const resultListUrl = "https://63243de9bb2321cba927d530.mockapi.io/docs/list/$mockData";
export const resultCountUrl = "https://63243de9bb2321cba927d530.mockapi.io/docs/list/$count";

export interface ResultState {
  result: ResultDate[];
  loading: boolean;
  limit: number;
  page: number;
  error: null | string;
}

export interface ResultDate {
  id: string | number;
  uuid: string;
  name: string;
  desc: string;
  createdAt: string;
}

export enum ResultActionTypes {
  FETCH_RESULT= 'FETCH_RESULT',
  FETCH_RESULT_SUCCESS= 'FETCH_RESULT_SUCCESS',
  FETCH_RESULT_ERROR= 'FETCH_RESULT_ERROR',
  SET_LIMIT = 'SET_LIMIT',
  SET_PAGE = 'SET_PAGE',
}
interface FetchResultAction {
  type: ResultActionTypes.FETCH_RESULT
}
interface FetchResultSuccessAction {
  type: ResultActionTypes.FETCH_RESULT_SUCCESS;
  payload: ResultDate[];
}
interface FetchResultErrorAction {
  type: ResultActionTypes.FETCH_RESULT_ERROR;
  payload: string;
}
interface SetLimit {
  type: ResultActionTypes.SET_LIMIT;
  payload: number;
}

interface SetPage {
  type: ResultActionTypes.SET_PAGE;
  payload: number;
}

export type ResultAction =
  FetchResultAction
  | FetchResultErrorAction
  | FetchResultSuccessAction
  | SetLimit
  | SetPage;
