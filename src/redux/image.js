const UPLOAD_IMAGE = 'image/UPLOAD';
const CROP_IMAGE = 'image/CROP';
const RESET_IMAGE = 'image/RESET';
const RESET_CROP_IMAGE = 'image/RESET_CROP';

export const uploadImage = (blob) => ({ type: UPLOAD_IMAGE, blob });
export const cropImage = (base64) => ({
  type: CROP_IMAGE,
  base64,
});
export const resetImage = () => ({
  type: RESET_IMAGE,
});
export const resetCropImage = () => ({
  type: RESET_CROP_IMAGE,
});

const initialState = {
  blob: null,
  cropped: null,
};

const image = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        blob: action.blob,
      };
    case CROP_IMAGE:
      return {
        ...state,
        cropped: action.base64,
      };
    case RESET_IMAGE:
      return initialState;
    case RESET_CROP_IMAGE:
      return {
        ...state,
        cropped: null,
      };
    default:
      return state;
  }
};

export default image;
