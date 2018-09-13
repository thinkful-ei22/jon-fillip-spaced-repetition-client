

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const QUESTION_REQUEST = 'QUESTION_REQUEST';
export const questionRequest = () => ({
  type: QUESTION_REQUEST
});


export const QUESTION_SUCCESS = 'QUESTION_SUCCESS';
export const questionSuccess = (currQuestion) => ({
  type: QUESTION_SUCCESS,
  currQuestion
});

export const QUESTION_ERROR = 'QUESTION_ERROR';
export const questionError = (err) => ({
  type: QUESTION_ERROR,
  err
});

export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const submitRequest = () => ({
  type: SUBMIT_REQUEST
});


export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const submitSuccess = (totalCorrect, overallTotal) => ({
  type: SUBMIT_SUCCESS,
  totalCorrect,
  overallTotal
});

export const SUBMIT_ERROR = 'SUBMIT_ERROR';
export const submitError = (err) => ({
  type: SUBMIT_ERROR,
  err
});

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const updateRequest = () => ({
  type: UPDATE_REQUEST
});


export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const updateSuccess = () => ({
  type: UPDATE_SUCCESS
});

export const UPDATE_ERROR = 'UPDATE_ERROR';
export const updateError = (err) => ({
  type: UPDATE_ERROR,
  err
});



export const getQuestions = (username) => dispatch => {
  dispatch(questionRequest());
  return fetch (`${API_BASE_URL}/questions/${username}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((res) => {
      dispatch(questionSuccess(res));
    })
    .catch(err => {
      dispatch(questionError(err));
    });
};

export const submitAnswer = (result, username, correct, total) => dispatch => {
  dispatch(submitRequest());
  
  return fetch (`${API_BASE_URL}/questions`, {
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({result, username, correct, total})
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((res) => {
      const totalCorrect = res.correct;
      const overallTotal = res.total;
      dispatch(submitSuccess(totalCorrect, overallTotal));
    })
    .catch(err => {
      dispatch(submitError(err));
    });
};

export const updateDatabase = () => (dispatch, getState) => {
  dispatch(updateRequest());
  const username = getState().auth.currentUser.username;
  return fetch (`${API_BASE_URL}/questions/update`, {
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({username})
  })
    .then(() => {
      dispatch(updateSuccess());
    })
    .catch(err => {
      dispatch(submitError(err));
    });
};