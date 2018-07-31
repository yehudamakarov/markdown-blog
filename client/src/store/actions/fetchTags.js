import axios from 'axios';

const fetchTags = () => {
    return (dispatch) => {
        axios.get('/tags')
        .then(resp => {
            console.log(resp.data);
            const tags = resp.data;
            
            dispatch({
                type: 'ADD_FETCHED_TAGS',
                payload: tags
            })
        })
    }
}

export default fetchTags;