const imagesWithBase64Reducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_BASE_64_IMAGE':
        return [
            ...state,
            action.payload
        ]
    case 'REMOVE_IMAGE_FROM_BASE_64':
        return [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)
        ]; 
    default:
        return state;
    }
}

export default imagesWithBase64Reducer;