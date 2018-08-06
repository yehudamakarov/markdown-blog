import axios from 'axios';

const updatePostAction = (postToUpdateFromState, id) => dispatch =>
    axios.patch(`/posts/${id}`, postToUpdateFromState).then(() => {
        axios.get('/posts').then(resp => {
            const posts = resp.data;
            dispatch({
                type: 'ADD_FETCHED_POSTS',
                payload: posts,
            });
        });
    });
export default updatePostAction;
