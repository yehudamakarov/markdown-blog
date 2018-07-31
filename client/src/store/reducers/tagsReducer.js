const tagsReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_FETCHED_TAGS':
        
        return [
            ...state,
            ...action.payload
        ]

    default:
        return state;
    }
}

export default tagsReducer;