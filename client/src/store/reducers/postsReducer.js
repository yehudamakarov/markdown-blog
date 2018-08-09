const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FETCHED_POSTS': {
            return [...action.payload];
        }
        case 'ADD_NEW_POST': {
            return [...state, action.payload];
        }
        case 'UPDATE_POST': {
            const indexOfPostToUpdate = state.findIndex(postObject => action.payload.id === postObject.id);

            return [...state.slice(0, indexOfPostToUpdate), action.payload, ...state.slice(indexOfPostToUpdate + 1)];
        }
        case 'DESTROY_POST': {
            const indexOfPostToDelete = state.findIndex(postObject => action.payload.id === postObject.id);

            return [...state.slice(0, indexOfPostToDelete), ...state.slice(indexOfPostToDelete + 1)];
        }

        default:
            return state;
    }
};

export default postsReducer;
