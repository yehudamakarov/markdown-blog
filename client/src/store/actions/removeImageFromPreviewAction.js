const removeImageFromPreviewAction = (index) => {
    return (dispatch) => {
      dispatch({
          type: 'REMOVE_IMAGE_FROM_PREVIEW',
          payload: index
      })
    }
}

export default removeImageFromPreviewAction;