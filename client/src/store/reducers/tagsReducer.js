const tagsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FETCHED_TAGS':
            return [...action.payload];
        case 'ADD_TAGS':

        default:
            return state;
    }
};

export default tagsReducer;
