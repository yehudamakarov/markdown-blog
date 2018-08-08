export const isNotEditingAction = () => dispatch => {
    dispatch({ type: 'IS_NOT_EDITING' });
};

export const isEditingAction = () => dispatch => {
    dispatch({ type: 'IS_EDITING' });
};
