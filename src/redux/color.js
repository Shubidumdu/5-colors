// import { analyzeImage } from "../api/etri";

// const GET_COLORS = "color/GET_COLORS";
// const GET_COLORS_SUCCESS = "color/GET_COLORS_SUCCESS";
// const GET_COLORS_ERROR = "color/GET_COLORS_ERROR";

// export const getColors = (image) => async (dispatch) => {
//   dispatch({ type: GET_COLORS });
//   try {
//     const result = await analyzeImage(image);
//     if (result.keys().length > 1) {
//       dispatch({ type: GET_COLORS_ERROR, error: "so many person" });
//     }
//     dispatch({ type: GET_COLORS_SUCCESS, posts });
//   } catch (e) {
//     dispatch({ type: GET_COLORS_ERROR, error: e });
//   }
// };

// const initialState = {
//   loading: false,
//   colors: null,
//   error: null,
// };

// const image = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_COLORS:
//       return { ...state, loading: true };
//     case GET_COLORS_SUCCESS:
//       return { loading: false, colors: action.payload };
//     case GET_COLORS_ERROR:
//       return { loading: false, colors: null, error: action.error };
//     default:
//       return state;
//   }
// };

// export default image;
