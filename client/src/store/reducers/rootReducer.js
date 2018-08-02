import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import imagesWithUrlReducer from './imagesWithUrlReducer';
import imagesWithPreviewAndBase64Reducer from './imagesWithPreviewAndBase64Reducer';
import coverImagesWithPreviewAndBase64Reducer from './coverImagesWithPreviewAndBase64Reducer';
import coverImagesWithUrlReducer from './coverImagesWithUrlReducer';
import tagsReducer from './tagsReducer';
import postsReducer from './postsReducer';
import isEditingReducer from './isEditingReducer';

const rootReducer = combineReducers({
    auth: loginReducer,
    imagesWithPreviewAndBase64: imagesWithPreviewAndBase64Reducer,
    imagesWithUrl: imagesWithUrlReducer,
    coverImagesWithPreviewAndBase64: coverImagesWithPreviewAndBase64Reducer,
    coverImagesWithUrl: coverImagesWithUrlReducer,
    tags: tagsReducer,
    posts: postsReducer,
    isEditing: isEditingReducer,
});

export default rootReducer;
