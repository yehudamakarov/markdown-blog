import axios from 'axios';

const addPostAction = newPostFromState => dispatch =>
    axios
        .post('/posts', newPostFromState)
        .then(resp => {
            dispatch({
                type: 'ADD_NEW_POST',
                payload: resp.data,
            });
        })
        .then(() =>
            axios.get('/tags').then(resp => {
                dispatch({
                    type: 'ADD_FETCHED_TAGS',
                    payload: resp.data,
                });
            })
        );

export default addPostAction;
