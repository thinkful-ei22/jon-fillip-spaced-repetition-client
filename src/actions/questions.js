

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
export const submitSuccess = () => ({
  type: SUBMIT_SUCCESS
});

export const SUBMIT_ERROR = 'SUBMIT_ERROR';
export const submitError = (err) => ({
  type: SUBMIT_ERROR,
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
  console.log('Submit answer is running');
  dispatch(submitRequest());
  
  return fetch (`${API_BASE_URL}/questions`, {
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({result, username, correct, total})
  })
    .then(() => {
      dispatch(submitSuccess());
    })
    .catch(err => {
      dispatch(submitError(err));
    });
};