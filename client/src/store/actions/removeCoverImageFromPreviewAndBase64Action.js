const removeCoverImageFromPreviewAndBase64Action = (index) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_COVER_IMAGE_FROM_PREVIEW_AND_BASE_64',
            payload: index
        })
      }
}

export default removeCoverImageFromPreviewAndBase64Action