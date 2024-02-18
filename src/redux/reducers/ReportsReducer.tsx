import {FETCH_REPORTS_SUCCESS} from '../typos/actionNames'


export const reportReducer = (state = {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_REPORTS_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
