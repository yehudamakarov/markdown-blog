import axios from 'axios';

// this function will receive an array of objects.
// each objects's key is the file name, and the store needs the objects to have
// values of the new URL of the image.

const imageUploadAction = (imagesWithPreviewAndBase64) => {
    return (dispatch, getState) => {
        imagesWithPreviewAndBase64.forEach(imageObjectWithPreviewAndBase64 => {
            const base64 = imageObjectWithPreviewAndBase64[Object.keys(imageObjectWithPreviewAndBase64).find((imageObjectKey) => {
                return imageObjectKey !== 'preview'
            })];
            axios({
                method: 'post',
                url: 'https://api.imgur.com/3/image',
                data: {
                  'image': base64,
                },
                headers: {
                  'Authorization': 'Client-ID 9ff2cbb10ead695',
                }
              }).then((resp) => {
                    const imageObjectWithUrl = {
                        [Object.keys(imageObjectWithPreviewAndBase64).find((imageObjectKey) => {
                            return imageObjectKey !== 'preview'
                        })]: resp.data.data.link
                    };
                    dispatch({
                        type:  'ADD_IMAGE_WITH_URL',
                        payload: imageObjectWithUrl,
                    });
                }).then(() => {
                    const index = getState().imagesWithPreviewAndBase64.findIndex((imageWithPreviewAndBase64) => {
                        console.log('imageWithPreviewAndBase64 :', imageWithPreviewAndBase64);
                        console.log('imageObjectWithPreviewAndBase64 :', imageObjectWithPreviewAndBase64);
                        return imageObjectWithPreviewAndBase64.preview === imageWithPreviewAndBase64.preview
                    })
                    dispatch({
                        type: 'REMOVE_IMAGE_FROM_PREVIEW_AND_BASE_64',
                        payload: index
                    })
                })
        });
    };
};

export default imageUploadAction;
