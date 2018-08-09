import axios from 'axios';

const updatePostAction = (postToUpdateFromState, id) => dispatch =>
    axios
        .patch(`/posts/${id}`, postToUpdateFromState)
        .then(resp => {
            dispatch({
                type: 'UPDATE_POST',
                payload: resp.data,
            });
        })
        .then(() => {
            axios.get('/tags').then(resp => {
                dispatch({
                    type: 'ADD_FETCHED_TAGS',
                    payload: resp.data,
                });
            });
        });
export default updatePostAction;
