const UPLOAD_IMAGE = "image/UPLOAD";
const REMOVE_IMAGE = "image/REMOVE";
const CROP_IMAGE = "image/CROP";

export const uploadImage = (blob) => ({ type: UPLOAD_IMAGE, blob });
export const removeImage = () => ({ type: REMOVE_IMAGE });
export const cropImage = (base64) => ({
  type: CROP_IMAGE,
  base64,
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
    case REMOVE_IMAGE:
      return initialState;
    default:
      return state;
  }
};

export default image;
