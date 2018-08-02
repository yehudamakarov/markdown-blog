const isEditingAction = () => dispatch => {
    dispatch({ type: 'IS_EDITING' });
};

export default isEditingAction;
