import axios from 'axios'

export const loginAction = ({ email, password }) => {
  return (dispatch) => {
    return axios.post('/login', {
      email,
      password
    })
    .then(() => dispatch({type: 'LOGIN'}))
    .catch(() => dispatch({type: 'LOGOUT'}))
  }
}

export const logoutAction = () => {
  return (dispatch) => {
    return axios.get('/logout')
      .then(() => dispatch({type: 'LOGOUT'}))
  }
}
