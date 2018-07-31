import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import imagesWithUrlReducer from './imagesWithUrlReducer';
import imagesWithPreviewAndBase64Reducer from './imagesWithPreviewAndBase64Reducer';
import coverImagesWithPreviewAndBase64Reducer from './coverImagesWithPreviewAndBase64Reducer';
import coverImagesWithUrlReducer from './coverImagesWithUrlReducer';
import tagsReducer from './tagsReducer';

const rootReducer = combineReducers(
    {
        auth: loginReducer,
        imagesWithPreviewAndBase64: imagesWithPreviewAndBase64Reducer,
        imagesWithUrl: imagesWithUrlReducer,
        coverImagesWithPreviewAndBase64: coverImagesWithPreviewAndBase64Reducer,
        coverImagesWithUrl: coverImagesWithUrlReducer,
        tags: tagsReducer
    }
)

export default rootReducer