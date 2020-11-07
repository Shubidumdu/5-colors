const UPLOAD_IMAGE = 'image/UPLOAD';
const REMOVE_IMAGE = 'image/REMOVE';

export const uploadImage = (file) => ({ type: UPLOAD_IMAGE, file });
export const removeImage = () => ({ type: REMOVE_IMAGE });

const initialState = null;

const image = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return action.file;
    case REMOVE_IMAGE:
      return null;
    default:
      return state;
  }
};

export default image;
