import { combineReducers } from "redux";
import image from "./image";
import color from "./color";
import result from "./result";

const rootReducer = combineReducers({ image, color, result });
export default rootReducer;
