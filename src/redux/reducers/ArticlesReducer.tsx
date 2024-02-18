import {FETCH_ARTICLES_SUCCESS} from '../typos/actionNames'
import { articleWelcome } from '../typos/actionNames';

export const articlesReducer = (state = {}, action: { type: string; payload: articleWelcome }) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

