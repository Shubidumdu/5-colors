import { combineColors } from "../api/colormind";
import { analyzeImage } from "../api/etri";

const GET_LOADING = "result/LOADING";
const GET_ERROR = "result/ERROR";
const FINISH_LOADING = "result/FINISH_LOADING";
const POST_PICTURE_SUCCESS = "result/POST_PICTURE_SUCCESS";
const POST_COLOR_SUCCESS = "result/POST_COLOR_SUCCESS";
const RESET_RESULT = "result/RESET";

export const getLoading = () => ({ type: GET_LOADING });
export const finishLoading = () => ({ type: FINISH_LOADING });

export const postPicture = (type, base64) => async (dispatch) => {
  dispatch({ type: GET_LOADING });
  try {
    const data = await analyzeImage({ type, file: base64 });
    dispatch({ type: POST_PICTURE_SUCCESS, data });
  } catch (err) {
    dispatch({ type: GET_ERROR, error: err });
  }
};

export const postColor = (colors) => async (dispatch) => {
  dispatch({ type: GET_LOADING });
  try {
    const data = await combineColors(colors);
    dispatch({ type: POST_COLOR_SUCCESS, data });
  } catch (err) {
    dispatch({ type: GET_ERROR, error: err });
  }
};

export const resetResult = () => ({
  type: RESET_RESULT,
});

const initialState = {
  loading: false,
  picture: [],
  color: [],
  error: false,
};

const result = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case POST_PICTURE_SUCCESS:
      return {
        ...state,
        loading: false,
        picture: action.data,
      };
    case POST_COLOR_SUCCESS:
      return {
        ...state,
        loading: false,
        color: action.data,
      };
    case RESET_RESULT:
      return initialState;
    default:
      return state;
  }
};

export default result;
