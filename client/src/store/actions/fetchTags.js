import axios from 'axios';

const fetchTags = () => dispatch => {
    axios.get('/tags').then(resp => {
        const tags = resp.data;
        dispatch({
            type: 'ADD_FETCHED_TAGS',
            payload: tags,
        });
    });
};

export default fetchTags;
