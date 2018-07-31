import axios from 'axios';

const fetchPosts = () => dispatch =>
    axios.get('/posts').then(resp => {
        const posts = resp.data;
        dispatch({
            type: 'ADD_FETCHED_POSTS',
            payload: posts,
        });
    });

export default fetchPosts;
