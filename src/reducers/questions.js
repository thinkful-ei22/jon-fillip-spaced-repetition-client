import {
  QUESTION_REQUEST,
  QUESTION_SUCCESS,
  QUESTION_ERROR,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_ERROR
} 
  from '../actions/questions'; 

const initialState = {
  currQuestion: null,
  loading: false,
  error: null,
  totalCorrect: 0,
  overallTotal: 0
};

export default function questionReducer(state = initialState, action) {
  if (action.type === QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error:null
    });
  }
  else if (action.type === QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      currQuestion: action.currQuestion,
      loading: false,
      error: null
    });
  }
  else if (action.type === QUESTION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.err
    });
  }
  else if (action.type === SUBMIT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error:null
    });
  }
  else if (action.type === SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      totalCorrect: action.totalCorrect,
      overallTotal: action.overallTotal,
      loading: false,
      error: null
    });
  }
  else if (action.type === SUBMIT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.err
    });
  }
  else if (action.type === UPDATE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error:null
    });
  }
  else if (action.type === UPDATE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null
    });
  }
  else if (action.type === UPDATE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.err
    });
  }

  return state;
}