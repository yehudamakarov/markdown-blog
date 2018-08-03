import axios from 'axios';

const updatePostAction = (postToUpdateFromState, id) => dispatch => axios.patch(`posts/${id}`, postToUpdateFromState);

export default updatePostAction;
