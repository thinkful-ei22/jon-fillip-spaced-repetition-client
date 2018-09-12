import {
  QUESTION_REQUEST,
  QUESTION_SUCCESS,
  QUESTION_ERROR,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR
} 
  from '../actions/questions'; 

const initialState = {
  currQuestion: null,
  loading: false,
  error: null
};

export default function questionReducer(state = initialState, action) {
  if (action.type === QUESTION_REQUEST) {
    console.log('request being made');
    return {
      loading: true,
      error:null
    };
  }
  else if (action.type === QUESTION_SUCCESS) {
    console.log('fetch question success');
    console.log('action in reducers', action.currQuestion);
    return {
      currQuestion: action.currQuestion,
      loading: false,
      error: null
    };
  }
  else if (action.type === QUESTION_ERROR) {
    console.log('Error with request');
    return {
      loading: false,
      error: action.err
    };
  }
  else if (action.type === SUBMIT_REQUEST) {
    console.log('submit request being made');
    return Object.assign({}, state, {
      loading: true,
      error:null
    });
  }
  else if (action.type === SUBMIT_SUCCESS) {
    console.log('fetch submit question success');
    //console.log('action in reducers', action.currQuestion);
    return Object.assign({}, state, {
      loading: false,
      error: null
    });
  }
  else if (action.type === SUBMIT_ERROR) {
    console.log('submit Error with request');
    return {
      loading: false,
      error: action.err
    };
  }
  return state;
}