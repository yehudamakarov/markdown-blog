const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FETCHED_POSTS':
            return [...action.payload];
        case 'ADD_POST':

        case 'UPDATE_POST':

        case 'DESTROY_POST':

        default:
            return state;
    }
};

export default postsReducer;
