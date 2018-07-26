import axios from 'axios';

const submitPostAction = (newPostFromState) => {
    return (dispatch) => {
        console.log('newPostFromState :', newPostFromState);
        axios.post('/posts', newPostFromState)
    }
}

export default submitPostAction;