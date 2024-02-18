import {FETCH_ARTICLES_SUCCESS} from '../typos/actionNames'


export const articlesReducer = (state = {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

