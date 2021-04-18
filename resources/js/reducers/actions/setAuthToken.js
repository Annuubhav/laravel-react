import axios from 'axios'

const setAuthToken = (set = true) => {
  const token = localStorage.getItem('token')
  if (token && set) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken
