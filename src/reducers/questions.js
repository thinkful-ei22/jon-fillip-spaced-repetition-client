import {QUESTION_REQUEST,QUESTION_SUCCESS,QUESTION_ERROR} from '../actions/questions'; 

const initialState = {
  currQuestion: null,
  loading: false,
  error: null
}

export default function questionReducer(state = initialState, action) {
  if (action.type === QUESTION_REQUEST) {
    console.log('request being made')
    return {
      ...state,
      loading: true,
      error:null
    }
  }
  else if (action.type === QUESTION_SUCCESS) {
    console.log('fetch question success')
    return {
      ...state,
      currQuestion: action.question,
      loading: false,
      error: null
    }
  }
  else if (action.type === QUESTION_ERROR) {
    console.log('Error with request')
    return {
      ...state,
      loading: false,
      error: action.err
    }
  }
  return state;
}