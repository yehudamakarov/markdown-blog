import axios from 'axios';

const addPostAction = newPostFromState => dispatch => {
    console.log('newPostFromState :', newPostFromState);
    return axios.post('/posts', newPostFromState);
};

export default addPostAction;
