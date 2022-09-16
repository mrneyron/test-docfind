import {Dayjs} from 'dayjs';
import {DateRange} from '@mui/x-date-pickers-pro/DateRangePicker';

export interface FilterState {
  name: string;
  uuid: string | null;
  createRange: DateRange<Dayjs>;
  sort: string;
  order: string;
}

export enum FilterActionTypes {
  SET_NAME = 'SET_NAME',
  SET_CREATE_RANGE = 'SET_CREATE_RANGE',
  SET_CREATE_TO = 'SET_CREATE_TO',
  SET_UUID = 'SET_UUID',
  SET_SORT = 'SET_SORT',
  SET_ORDER = 'SET_ORDER'
}

interface SetNameAction {
  type: FilterActionTypes.SET_NAME;
  payload: string;
}

interface SetCreateRangeAction {
  type: FilterActionTypes.SET_CREATE_RANGE;
  payload: DateRange<Dayjs>;
}

interface SetUuidAction {
  type: FilterActionTypes.SET_UUID;
  payload: string | null;
}

interface SetOrderAction {
  type: FilterActionTypes.SET_ORDER;
  payload: string;
}

interface SetSortAction {
  type: FilterActionTypes.SET_SORT;
  payload: string;
}

export type FilterAction = SetNameAction | SetCreateRangeAction | SetUuidAction | SetOrderAction | SetSortAction;
