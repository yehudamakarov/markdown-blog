import axios from 'axios';

const addPostAction = newPostFromState => () => axios.post('/posts', newPostFromState);

export default addPostAction;
