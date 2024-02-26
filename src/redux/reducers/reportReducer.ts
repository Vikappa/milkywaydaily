import { FETCH_REPORTS, FETCH_REPORTS_SUCCESS, FETCH_REPORTS_FAILURE } from '../typos'
import { Dispatch } from 'redux'

const initialState = {
  reportData: null,
}

interface FetchReportsAction {
    type: typeof FETCH_REPORTS
  }
  
  interface FetchReportsSuccessAction {
    type: typeof FETCH_REPORTS_SUCCESS;
    payload: any
  }
  
  interface FetchReportsFailureAction {
    type: typeof FETCH_REPORTS_FAILURE;
    payload: Error
  }

  type ReportActionTypes = FetchReportsAction | FetchReportsSuccessAction | FetchReportsFailureAction;


export const fetchReports = () => {
    return async (dispatch: Dispatch<ReportActionTypes>) => {
      dispatch({ type: FETCH_REPORTS })
      try {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v3/reports`)
        const data = await response.json()
        dispatch({ type: FETCH_REPORTS_SUCCESS, payload: data })
      } catch (error) {
        console.error(error)
        dispatch({ type: FETCH_REPORTS_FAILURE, payload: error })
      }
    }
  }
  


const reportReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_REPORTS_SUCCESS:
            return {
                ...state,
                reportData: action.payload,
            }
        case FETCH_REPORTS_FAILURE:
            return {
                ...state,
                reportData: null,
            }
        default:
            return state
    }
};


export default reportReducer
