import axios from 'axios';

export const fetchPosts = () => dispatch =>
    axios.get('/posts').then(resp => {
        const posts = resp.data;
        dispatch({
            type: 'ADD_FETCHED_POSTS',
            payload: posts,
        });
    });

export const fetchTags = () => dispatch => {
    axios.get('/tags').then(resp => {
        const tags = resp.data;
        dispatch({
            type: 'ADD_FETCHED_TAGS',
            payload: tags,
        });
    });
};
