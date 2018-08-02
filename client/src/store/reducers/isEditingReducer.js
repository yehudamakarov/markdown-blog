const isEditingReducer = (state = false, action) => {
    switch (action.type) {
        case 'IS_EDITING':
            return true;

        case 'IS_NOT_EDITING':
            return false;

        default:
            return state;
    }
};

export default isEditingReducer;
