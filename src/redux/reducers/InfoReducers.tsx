import {FETCH_INFO_SUCCESS} from '../typos/actionNames'

export const infoReducer = (state = {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_INFO_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
};

