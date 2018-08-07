import axios from 'axios';

const addPostAction = newPostFromState => dispatch => axios.post('/posts', newPostFromState);

export default addPostAction;
