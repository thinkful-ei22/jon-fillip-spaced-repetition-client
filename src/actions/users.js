import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const registerRequest = () => ({
  type: REGISTER_REQUEST
})

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  data
})

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const registerError = (err) => ({
  type: REGISTER_ERROR,
  err
})


export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/user`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
