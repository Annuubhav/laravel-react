import axios from 'axios'
import { NotificationManager } from 'react-notifications'

import setAuthToken from './setAuthToken'

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from './types'

const API_URL = 'http://laravel-react.local/api'

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOGIN_USER })
  axios
    .post(`${API_URL}/login`, userData)
    .then(res => {
      const { access_token, user } = res.data.data

      setAuthToken(access_token)
      localStorage.setItem('token', access_token)

      localStorage.setItem('user', JSON.stringify(user))
      dispatch(dispatch({ type: LOGIN_USER_SUCCESS, payload: user }))
      history.push('/')
      NotificationManager.success('User Login Successfully!')
    })
    .catch(err => {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: err.response,
      })

      err.response.data.message &&
        NotificationManager.error(err.response.data.message)
    })
}

export const logoutUser = () => dispatch => {
  setAuthToken()
  axios.get(`${API_URL}logout`).then(({ data }) => {
    NotificationManager.success(data.message)
  })

  dispatch({ type: LOGOUT_USER })
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  setAuthToken(false)
}
