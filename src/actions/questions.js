

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

export const getQuestions = () => dispatch => {
  dispatch(questionRequest());
  return fetch (`${API_BASE_URL}/questions`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((res) => {
      dispatch(questionSuccess(res));
    })
    .catch(err => {
      dispatch(questionError(err));
    });
};