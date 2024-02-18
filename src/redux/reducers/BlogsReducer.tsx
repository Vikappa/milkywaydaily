import {FETCH_BLOG_SUCCESS} from '../typos/actionNames'
import { blogWelcome } from '../typos/actionNames';

export const blogReducer = (state = {}, action: { type: string; payload: blogWelcome }) => {
  switch (action.type) {
    case FETCH_BLOG_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
