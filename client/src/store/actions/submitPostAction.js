import axios from 'axios';

const submitPostAction = (newPostFromState) => {
    return (dispatch) => {
        console.log('newPostFromState :', newPostFromState);
        return axios.post('/posts', newPostFromState)
    }
}

export default submitPostAction;