const coverImagesWithUrlReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_COVER_IMAGE_WITH_URL':
        return [
                ...state,
                action.payload
            ];
    case 'REMOVE_COVER_IMAGE_WITH_URL':
        return [];
    default:
        return state;
    }
}
export default coverImagesWithUrlReducer;