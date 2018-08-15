import axios from 'axios';

const destroyPostAction = id => dispatch =>
    axios.delete(`/posts/${id}`).then(() => {
        dispatch({ type: 'DESTROY_POST', payload: id });
        axios.get('/tags').then(resp => {
            const tags = resp.data;
            dispatch({
                type: 'ADD_FETCHED_TAGS',
                payload: tags,
            });
        });
    });

export default destroyPostAction;
