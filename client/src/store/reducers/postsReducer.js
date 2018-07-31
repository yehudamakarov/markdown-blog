const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FETCHED_POSTS':
            return [...action.payload];
        default:
            return state;
    }
};

export default postsReducer;
