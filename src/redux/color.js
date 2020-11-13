const ADD_COLOR = "color/ADD";
const REMOVE_COLOR = "color/REMOVE";
const CHANGE_COLOR = "color/CHANGE";
const SET_COLORS = "color/SET";

export const addColor = (color) => ({ type: ADD_COLOR, color });
export const removeColor = (index) => ({ type: REMOVE_COLOR, index });
export const changeColor = (index, color) => ({
  type: CHANGE_COLOR,
  index,
  color,
});
export const setColors = (colors) => ({
  type: SET_COLORS,
  colors,
});

const initialState = [];

const color = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return [...state, action.color];
    case REMOVE_COLOR:
      return state.filter((color, idx) => idx !== action.index);
    case CHANGE_COLOR:
      const newState = ([...state][action.index] = color);
      return newState;
    case SET_COLORS:
      return action.colors;
    default:
      return state;
  }
};

export default color;
