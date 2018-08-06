import axios from 'axios';

export const loginAction = ({ email, password }) => dispatch =>
    axios
        .post('/login', {
            email,
            password,
        })
        .then(() => dispatch({ type: 'LOGIN' }))
        .catch(() => dispatch({ type: 'LOGOUT' }));

export const logoutAction = () => dispatch => axios.get('/logout').then(() => dispatch({ type: 'LOGOUT' }));
