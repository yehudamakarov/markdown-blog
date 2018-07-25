const imagesWithPreviewReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_IMAGE_TO_PREVIEW_AND_BASE_64':
        return [
            ...state,
            action.payload
        ];
    case 'REMOVE_IMAGE_FROM_PREVIEW_AND_BASE_64':
        return [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)
        ];
    case 'REMOVE_IMAGE_FROM_PREVIEW_AND_BASE_64':
        return [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)
        ];
    default:
        return state;
    }
}
export default imagesWithPreviewReducer;