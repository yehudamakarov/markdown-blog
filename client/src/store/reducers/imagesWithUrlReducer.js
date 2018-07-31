const imagesWithUrlReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_IMAGE_WITH_URL':
            return [...state, action.payload];
        default:
            return state;
    }
};
export default imagesWithUrlReducer;
