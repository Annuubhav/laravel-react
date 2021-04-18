import { isString } from 'lodash'

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from './actions/types'

const user =
  localStorage.getItem('user') !== 'undefined' &&
  localStorage.getItem('user') !== undefined &&
  isString(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user'))
    : null

const INIT_STATE = {
  isAuthenticated: false,
  user: user,
  loading: false,
}

const isEmpty = require('is-empty')

export default (state = INIT_STATE, action) => {
        console.log(action)
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true }

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        loading: false,
        user: action.payload,
      }

    case LOGIN_USER_FAILURE:
      return { ...state, ...action.payload.data, loading: false }

    case LOGOUT_USER:
      return { ...state, user: null }

    case SIGNUP_USER:
      return { ...state, loading: true }

    case SIGNUP_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload }

    case SIGNUP_USER_FAILURE:
      return { ...state, loading: false }

    default:
      return { ...state }
  }
}
