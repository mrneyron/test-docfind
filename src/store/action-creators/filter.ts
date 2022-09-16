import {FilterAction, FilterActionTypes} from "../../types/filter";
import {Dayjs} from 'dayjs';
import {DateRange} from '@mui/x-date-pickers-pro/DateRangePicker';

export function setName(name: string): FilterAction {
  return {type: FilterActionTypes.SET_NAME, payload: name}
}

export function setCreateRange(createRange: DateRange<Dayjs>): FilterAction {
  return {type: FilterActionTypes.SET_CREATE_RANGE, payload: createRange}
}

export function setUuid(uuid: string | null | string): FilterAction {
  return {type: FilterActionTypes.SET_UUID, payload: uuid}
}

export function setSort(sort: string): FilterAction {
  return {type: FilterActionTypes.SET_SORT, payload: sort}
}

export function setOrder(order: string): FilterAction {
  return {type: FilterActionTypes.SET_ORDER, payload: order}
}
