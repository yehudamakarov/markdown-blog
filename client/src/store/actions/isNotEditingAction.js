const isNotEditingAction = () => dispatch => {
    dispatch({ type: 'IS_NOT_EDITING' });
};

export default isNotEditingAction;
