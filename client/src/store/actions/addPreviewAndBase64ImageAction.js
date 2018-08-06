const addPreviewAndBase64ImageAction = imageObjectWithPreviewAndBase64 => dispatch => {
    dispatch({
        type: 'ADD_IMAGE_TO_PREVIEW_AND_BASE_64',
        payload: imageObjectWithPreviewAndBase64,
    });
};

export default addPreviewAndBase64ImageAction;
