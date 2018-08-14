import axios from 'axios';

const destroyPostAction = id => dispatch =>
    axios.delete(`/posts/${id}`).then(() => {
        axios
            .get('/posts')
            .then(resp => {
                const posts = resp.data;
                dispatch({
                    type: 'ADD_FETCHED_POSTS',
                    payload: posts,
                });
            })
            .then(() => {
                axios.get('/tags').then(resp => {
                    const tags = resp.data;
                    dispatch({
                        type: 'ADD_FETCHED_TAGS',
                        payload: tags,
                    });
                });
            });
    });
export default destroyPostAction;
