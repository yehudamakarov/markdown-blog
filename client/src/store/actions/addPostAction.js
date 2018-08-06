import axios from 'axios';

const addPostAction = newPostFromState => dispatch =>
    axios.post('/posts', newPostFromState).then(() => {
        axios.get('/posts').then(resp => {
            const posts = resp.data;
            dispatch({
                type: 'ADD_FETCHED_POSTS',
                payload: posts,
            });
        });
    });

export default addPostAction;
